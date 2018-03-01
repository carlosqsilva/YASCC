import * as type from "./constants"
import { formatSongTitle, secToTime, formatNumber } from "./utils"
import { audioStream, searchUrl, genreUrl } from "./api"

export const toggle_sidebar = () => ({
  type: type.TOGGLE_SIDEBAR
})

export const on_play = () => ({
  type: type.ON_PLAY
})

export const on_pause = () => ({
  type: type.ON_PAUSE
})

const getSongs = url => {
  return fetch(url)
    .then(res => res.json())
    .then(obj => {
      const nextUrl = obj.next_href
      const playlist = obj.collection
        .filter(track => track.artwork_url !== null && track.duration !== 30000)
        .map(track => ({
          title: formatSongTitle(track.title),
          duration: secToTime(track.duration),
          stream: track.stream_url,
          artwork: track.artwork_url,
          user: track.user.username,
          id: track.id,
          likeCount: track.likes_count,
          likesCountMin: formatNumber(track.likes_count),
          playedCount: track.playback_count,
          playedCountMin: formatNumber(track.playback_count)
        }))
      console.table(playlist)
      return { playlist, nextUrl }
    })
}

export const play_song = (songIndex, song) => dispatch => {
  const audioUrl = audioStream(song.stream)
  dispatch({ type: type.PLAY_SONG, songIndex, song, audioUrl })
}

export const play_song_from_btn = (index, route) => (dispatch, getState) => {
  let location = getState().playlist.location
  let playlist

  if (location !== route) {
    switch (route) {
      case "/":
        playlist = getState().root.playlist
        break
      case "/search":
        playlist = getState().search.results
        break
      case "/playlist":
        playlist = getState().userPlaylist.playlist
        break
      default:
        return []
    }
    dispatch({
      type: type.ACTIVE_PLAYLIST,
      currentPlaylist: playlist,
      location: route
    })
  } else {
    playlist = getState().playlist.playlist
  }

  dispatch(play_song(index, playlist[index]))
}

export const play_next = () => (dispatch, getState) => {
  const { playlist, songIndex } = getState().playlist
  const nextSong = songIndex !== playlist.length - 1 ? songIndex + 1 : 0
  dispatch(play_song(nextSong, playlist[nextSong]))
}

export const play_prev = () => (dispatch, getState) => {
  const { playlist, songIndex } = getState().playlist
  const prevSong = songIndex !== 0 ? songIndex - 1 : playlist.length - 1
  dispatch(play_song(prevSong, playlist[prevSong]))
}

export const load_playlist = genre => dispatch => {
  const url = genreUrl(genre || "house")

  dispatch({ type: type.PLAYLIST_LOADING })
  getSongs(url).then(({ playlist, nextUrl }) =>
    dispatch({ type: type.PLAYLIST_LOADED, playlist, nextUrl })
  )
}

export const load_playlist_next = () => (dispatch, getState) => {
  const { nextUrl, loadingPlaylist } = getState().root

  if (!loadingPlaylist) {
    dispatch({ type: type.PLAYLIST_LOADING_NEXT })
    getSongs(nextUrl).then(({ playlist, nextUrl }) =>
      dispatch({ type: type.PLAYLIST_LOADED, playlist, nextUrl })
    )
  }
}

export const search_songs = q => dispatch => {
  const url = searchUrl(q)
  dispatch({ type: type.LOADING_SEARCH })
  getSongs(url).then(({ playlist, nextUrl }) =>
    dispatch({ type: type.LOADED_SEARCH, playlist, nextUrl })
  )
}

export const load_next_results = () => (dispatch, getState) => {
  const { nextUrl, loadingSearch } = getState().search

  if (!loadingSearch) {
    dispatch({ type: type.LOADING_SEARCH_NEXT })
    getSongs(nextUrl).then(({ playlist, nextUrl }) =>
      dispatch({ type: type.LOADED_SEARCH, playlist, nextUrl })
    )
  }
}

export const add_to_playlist = song => (dispatch, getState) => {
  const playlist = getState().userPlaylist.playlist
  const repeated = playlist.filter(track => track.id === song.id)
  if (repeated.length === 0) {
    dispatch({ type: type.ADD_TO_PLAYLIST, song })
  }
}

export const remove_from_playlist = song => (dispatch, getState) => {
  let playlist = getState().userPlaylist.playlist.filter(
    track => track.id !== song.id
  )
  dispatch({ type: type.REMOVE_FROM_PLAYLIST, playlist })
}
