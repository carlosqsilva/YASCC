const padZero = (num, size) => {
  let s = String(num)
  while (s.length < size) {
    s = `0${s}`
  }
  return s
}

export const secToTime = duration => {
  const num = parseInt(duration / 1000, 10)
  const minutes = padZero(Math.floor(num / 60), 2)
  const seconds = padZero(num % 60, 2)
  return `${minutes}:${seconds}`
}

export const formatSongTitle = str => {
  if (!str) return ""
  return str
    .replace("–", "-")
    .split("-")
    .pop()
    .replace(/[[|(|*|@|✪]/g, "?")
    .split("?")[0]
}

export const formatNumber = likes => {
  if (likes < 1000) return likes
  const str = likes.toString()
  const num = str.length
  const qtd = num % 3 === 0 ? 3 : num % 3
  return `${str.substring(0, qtd)}${num >= 7 ? "M" : "K"}`
}
