import {
  TOGGLE_SIDEBAR,
  HIDE_SIDEBAR,
  ON_LOAD_START,
  ON_PLAY,
  ON_PAUSE,
  ON_TIME_UPDATE,
  PLAY_SONG,
  ON_LOADED_METADATA,
  PLAYLIST_LOADED,
  PLAYLIST_LOADING,
  PLAYLIST_LOADING_NEXT
} from './constants'

import { api_key_dev } from './api_key'

const api_tracks = `https://api.soundcloud.com/tracks?linked_partitioning=1&limit=50&offset=0&${api_key_dev}`

const filter_data = (data) => {
  let newData = data.collection.filter( track => (track.artwork_url !== null) && (track.duration !== 30000) )

  newData = newData.map( track => {
    return {
      title: track.title,
      duration: track.duration,
      stream: track.stream_url,
      artwork: track.artwork_url,
      user: track.user.username,
      id: track.id,
      likes: track.likes_count
    }
  })

  return {playlist: newData, nextUrl: data.next_href}
}

export const toggle_sidebar = () => ({
  type: TOGGLE_SIDEBAR
})

export const hide_sidebar = () => ({
  type: HIDE_SIDEBAR
})

export const on_load_start = () => ({
  type: ON_LOAD_START
})

export const on_loaded_metadata = (duration) => ({
  type: ON_LOADED_METADATA,
  duration
}) 

export const on_play = () => ({
  type: ON_PLAY
})

export const on_pause = () => ({
  type: ON_PAUSE
})

export const on_time_update = (currentTime) => ({
  type: ON_TIME_UPDATE,
  currentTime
})

export const play_song = (songIndex, song) => dispatch => {
  const audioUrl = `${song.stream}?${api_key_dev}`

  dispatch({type: PLAY_SONG, songIndex, song, audioUrl})
}

export const play_song_from_btn = (songIndex, audioUrl) => (dispatch, getState) =>{
  const { playlist } = getState()
  const song = playlist[songIndex]

  dispatch(play_song(songIndex, song))
}

export const play_next = () => (dispatch, getState) => {
  const { playlist, songIndex } = getState()
  const nextSong = (songIndex !== playlist.length - 1) ? songIndex + 1 : 0;
  const song = playlist[nextSong]
  dispatch(play_song(nextSong, song))
}

export const play_prev = () => (dispatch, getState) => {
  const { playlist, songIndex } = getState()
  const prevSong = (songIndex !== 0) ? songIndex - 1 : playlist.length - 1;
  const song = playlist[prevSong]
  dispatch(play_song(prevSong, song))
}

const fetch_songs = (url) => (dispatch) => {
  fetch(url)
  .then( resp => resp.json())
  .then( data => filter_data(data))
  .then( ({playlist, nextUrl}) => dispatch({type: PLAYLIST_LOADED, playlist, nextUrl}))
}

export const load_playlist = (genre = "house") => (dispatch) => {
  const url = `${api_tracks}&genres=${genre}`
  
  dispatch({type: PLAYLIST_LOADING})
  dispatch(fetch_songs(url))
}

export const load_playlist_next = () => (dispatch, getState) => {
  const { nextUrl, loadingPlaylist } = getState()

  if (!loadingPlaylist) {
    dispatch({type: PLAYLIST_LOADING_NEXT})
    dispatch(fetch_songs(nextUrl))
  }
}