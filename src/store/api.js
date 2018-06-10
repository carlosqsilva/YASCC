// const key = [
//   "client_id=a7Ucuq0KY8Ksn8WzBG6wj4x6pcId6BpU",
//   "client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH",
//   "client_id=x3d1i5dxXwTtUNJAy8djMDh7yYdxSZX0"
// ]
/*
  https://api.soundcloud.com/tracks?linked_partitioning=1&limit=10&client_id=a7Ucuq0KY8Ksn8WzBG6wj4x6pcId6BpU&genres=house
*/
const secToTime = duration => {
  const num = parseInt(duration / 1000, 10)
  const minutes = String(Math.floor(num / 60)).padStart(2, "0")
  const seconds = String(num % 60).padStart(2, "0")
  return `${minutes}:${seconds}`
}

const formatSongTitle = str => {
  if (!str) return ""
  return str
    .replace("–", "-")
    .split("-")
    .pop()
}

const formatNumber = likes => {
  if (likes < 1000) return likes
  if (!likes) return 0
  const str = likes.toString()
  const num = str.length
  const qtd = num % 3 === 0 ? 3 : num % 3
  return `${str.substring(0, qtd)}${num >= 7 ? "M" : "K"}`
}

export class api {
  constructor(limit) {
    this.key = "client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH"
    this.tracks = `https://api.soundcloud.com/tracks?linked_partitioning=1&limit=${limit}&${
      this.key
    }`
    this.created_at = null
    this.genre = "genres=house"
    this.tag = null
    this.next = ""
  }

  load() {
    const url = [this.tracks, this.genre, this.tag, this.created_at]
      .filter(opt => opt !== null)
      .join("&")
    return this.getSongs(url)
  }

  setGenre(genre) {
    this.genre = `genres=${genre}`
    this.tag = null
    return this.load()
  }

  setTag(tag) {
    this.tag = `tags=${tag}`
    this.genre = null
    return this.load()
  }

  setFilter(filter) {
    this.created_at = !filter ? null : `created_at=${filter}`
    return this.load()
  }

  loadNext() {
    return this.getSongs(this.next)
  }

  async audioStream(url) {
    return `${url}?${this.key}`
  }

  async search(q) {
    if (!q.trim()) return []
    const query = q
      .split(" ")
      .filter(str => str.length > 0)
      .join("%20")
    return this.getSongs(`${this.tracks}&q=${query}`)
  }

  async getSongs(url) {
    try {
      const response = await fetch(url).then(res => res.json())
      this.next = response.next_href

      const playlist = response.collection
        .filter(track => track.artwork_url !== null && track.duration !== 30000)
        .map(track => ({
          id: track.id,
          title: formatSongTitle(track.title),
          duration: secToTime(track.duration),
          stream: track.stream_url,
          artworkOriginal: track.artwork_url,
          artwork: track.artwork_url.replace("large", "t67x67"),
          waveform: track.waveform_url,
          user: track.user.username,
          likesCount: track.likes_count,
          likesCountMin: formatNumber(track.likes_count)
        }))

      return playlist
    } catch (err) {
      console.log(err)
      return []
    }
  }
}
