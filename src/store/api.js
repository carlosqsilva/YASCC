// const key = [
//   "client_id=a7Ucuq0KY8Ksn8WzBG6wj4x6pcId6BpU",
//   "client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH",
//   "client_id=x3d1i5dxXwTtUNJAy8djMDh7yYdxSZX0"
// ]

const padZero = (num, size) => {
  let s = String(num)
  while (s.length < size) {
    s = `0${s}`
  }
  return s
}

const secToTime = duration => {
  const num = parseInt(duration / 1000, 10)
  const minutes = padZero(Math.floor(num / 60), 2)
  const seconds = padZero(num % 60, 2)
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
      .filter(_ => _ !== null)
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
    if (!filter) this.created_at = null
    this.created_at = `created_at=${filter}`
      .toLowerCase()
      .split(" ")
      .join("_")
    return this.load()
  }

  loadNext() {
    return this.getSongs(this.next)
  }

  audioStream(url) {
    return Promise.resolve(`${url}?${this.key}`)
  }

  search(q) {
    if (!q.trim()) return Promise.resolve([])
    const query = q
      .split(" ")
      .filter(str => str.length > 0)
      .join("%20")
    return this.getSongs(`${this.tracks}&q=${query}`)
  }

  getSongs(url) {
    return fetch(url)
      .then(res => res.json())
      .then(obj => {
        this.next = obj.next_href
        const playlist = obj.collection
          .filter(
            track => track.artwork_url !== null && track.duration !== 30000
          )
          .map(track => ({
            id: track.id,
            title: formatSongTitle(track.title),
            duration: secToTime(track.duration),
            stream: track.stream_url,
            artwork: track.artwork_url,
            user: track.user.username,
            likesCount: track.likes_count,
            likesCountMin: formatNumber(track.likes_count)
          }))
        return playlist
      })
  }
}
