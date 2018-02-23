const padZero = (num, size) => {
  let s = String(num)
  while (s.length < size) {
    s = `0${s}`
  }
  return s
}

export const secToTime = num => {
  const minutes = padZero(Math.floor(num / 60), 2)
  const seconds = padZero(num % 60, 2)
  return `${minutes}:${seconds}`
}

export const msToTime = duration => {
  let second = parseInt((duration / 1000) % 60, 10)
  let minute = parseInt((duration / (1000 * 60)) % 60, 10)
  let hour = parseInt((duration / (1000 * 60 * 60)) % 24, 10)

  hour = hour < 10 ? "0" + hour : hour
  minute = minute < 10 ? "0" + minute : minute
  second = second < 10 ? "0" + second : second

  if (hour < 1) {
    return `${minute}:${second}`
  }

  return `${hour}:${minute}:${second}`
}

export const truncateString = (str, size = 50) => {
  if (str.length > size) {
    return str.substring(0, size) + "..."
  }
  return str
}
