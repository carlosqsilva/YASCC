import * as type from "./constants"
import { api } from "./api"
import Storage from "./storage"

const API = new api(35)

const DB = new Storage({
  version: 4,
  name: "yascc",
  store: [
    {
      name: "playlist",
      key: "id"
    },
    {
      name: "recent",
      key: "id"
    }
  ]
})

export const online = () => ({
  type: type.ONLINE
})

export const offline = () => ({
  type: type.OFFLINE
})

export const toggle_sidebar = () => ({
  type: type.TOGGLE_SIDEBAR
})

export const on_load_start = () => ({
  type: type.ON_LOAD_START
})

export const on_play = () => ({
  type: type.ON_PLAY
})

export const on_pause = () => ({
  type: type.ON_PAUSE
})

export const toggle_loop = loop => ({
  type: type.TOGGLE_LOOP,
  loop
})

export const toggle_shuffle = () => ({
  type: type.TOGGLE_SHUFFLE
})

export const loaded_metadata = () => ({
  type: type.ON_LOADED_METADATA
})

export const toggle_mute = mute => ({
  type: type.TOGGLE_MUTE,
  mute
})

export const change_volume = event => ({
  type: type.ON_VOLUME_CHANGE,
  volume: event.target.value
})

export const toggle_dark_mode = () => (dispatch, getState) => {
  const { darkMode } = getState().root

  if (darkMode) {
    document.documentElement.setAttribute("data-theme", "light")
  } else {
    document.documentElement.setAttribute("data-theme", "dark")
  }

  dispatch({
    type: type.TOGGLE_DARK_MODE
  })
}

export const play_song = (index, song) => async dispatch => {
  const audioUrl = await API.audioStream(song.stream)

  dispatch({ type: type.PLAY_SONG, index, song, audioUrl })

  const result = await DB.get("recent", song.id)

  if (!result) {
    DB.save("recent", song)
  }
}

export const play_song_from_btn = (index, route) => (dispatch, getState) => {
  let newPlaylist

  if (route === "/") newPlaylist = getState().playlist.playlist
  else if (route === "/search") newPlaylist = getState().playlist.search
  else if (route === "/playlist") newPlaylist = getState().playlist.user
  else if (route === "/recent") newPlaylist = getState().playlist.recent

  dispatch(play_song(index, newPlaylist[index]))
  dispatch({
    type: type.ACTIVE_PLAYLIST,
    playlist: newPlaylist
  })
}

function getRandom(playlist, repeated) {
  const random = Math.floor(playlist.length * Math.random())
  if (repeated.includes(random)) {
    return getRandom()
  }
  return random
}

export const play_next = () => (dispatch, getState) => {
  const { playlist, index, shuffle, repeated } = getState().player
  let nextSong

  if (shuffle) {
    nextSong = getRandom(playlist, repeated)
    dispatch({
      type: type.NEXT_SHUFFLE,
      index: nextSong
    })
  } else {
    nextSong = index !== playlist.length - 1 ? index + 1 : 0
  }

  dispatch(play_song(nextSong, playlist[nextSong]))
}

export const play_prev = () => (dispatch, getState) => {
  const { playlist, index } = getState().player
  const prevSong = index !== 0 ? index - 1 : playlist.length - 1
  dispatch(play_song(prevSong, playlist[prevSong]))
}

export const set_genre = genre => async dispatch => {
  dispatch({ type: type.PLAYLIST_LOADING })

  const { playlist, next } = await API.setGenre(genre)
  dispatch({ type: type.PLAYLIST_LOADED, playlist, next })
}

export const set_tag = tag => async dispatch => {
  dispatch({ type: type.PLAYLIST_LOADING })

  const { playlist, next } = await API.setTag(tag)
  dispatch({ type: type.PLAYLIST_LOADED, playlist, next })
}

export const set_filter = filter => async dispatch => {
  dispatch({ type: type.PLAYLIST_LOADING })

  const { playlist, next } = await API.setFilter(filter)
  dispatch({ type: type.PLAYLIST_LOADED, playlist, next })
}

export const load_playlist_next = () => async (dispatch, getState) => {
  const { loading, nextPlaylist } = getState().playlist

  if (!loading) {
    dispatch({ type: type.PLAYLIST_LOADING_NEXT })

    const { playlist, next } = await API.loadUrl(nextPlaylist)
    dispatch({ type: type.PLAYLIST_LOADED, playlist, next })
  }
}

export const search_songs = q => async dispatch => {
  dispatch({ type: type.SEARCH_LOADING })

  const { playlist, next } = await API.search(q)
  dispatch({ type: type.SEARCH_LOADED, playlist, next })
}

export const load_next_results = () => async (dispatch, getState) => {
  const { loading, nextSearch } = getState().playlist

  if (!loading) {
    dispatch({ type: type.SEARCH_LOADING_NEXT })

    const { playlist, next } = await API.loadUrl(nextSearch)
    dispatch({ type: type.SEARCH_LOADED, playlist, next })
  }
}

export const add_to_playlist = song => async dispatch => {
  const repeated = await DB.get("recent", song.id)

  if (!repeated) {
    dispatch({ type: type.ADD_TO_PLAYLIST, song })
    DB.save("playlist", song)
  }
}

export const remove_from_playlist = song => (dispatch, getState) => {
  let playlist = getState().playlist.user.filter(track => track.id !== song.id)
  dispatch({ type: type.REMOVE_FROM_PLAYLIST, playlist })
  DB.delete("playlist", song.id)
}

export const load_recent_played = () => async dispatch => {
  const recent = await DB.getStore("recent")

  dispatch({
    type: type.LOAD_RECENT_PLAYED,
    recent
  })
}

export const init = () => async dispatch => {
  await DB.init()

  const playlist = await DB.getStore("playlist")

  dispatch(set_genre("house"))

  dispatch({
    type: type.INITIAL_LOAD,
    playlist
  })
}
