import * as type from './constants'
import { combineReducers } from 'redux'

const rootInitialState = {
  sidebarVisible: false,
  loadingPlaylist: true,
  duration: 0,
  isPlaying: false,
  songIndex: null,
  playlist: [],
  favorites: null,
  userPlaylist: [],
  currentSong: null,
  audioUrl: null,
  nextUrl: null
}

const rootReducer = (state = rootInitialState, action) => {
  switch (action.type) {
    case type.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarVisible: !state.sidebarVisible
      }
    case type.HIDE_SIDEBAR:
      return {
        ...state,
        sidebarVisible: false
      }
    case type.PLAYLIST_LOADING:
      return {
        ...state,
        loadingPlaylist: true,
        playlist: []
      }
    case type.PLAYLIST_LOADING_NEXT:
      return {
        ...state,
        loadingPlaylist: true,
      }
    case type.PLAYLIST_LOADED:
      return {
        ...state,
        loadingPlaylist: false,
        playlist: [...state.playlist, ...action.playlist],
        nextUrl: action.nextUrl
      }
    case type.ON_LOAD_START:
      return {
        ...state,
        currentTime: 0,
        duration: 0
      }
    default:
      return state;
  }
}

const playlistInitialState = {
  playlist: [],
  songIndex: null,
  audioUrl: null,
  currentSong: null,
  isPlaying: false,
}

const playlistReducer = (state = playlistInitialState, action) => {
  switch (action.type) {
    case type.ACTIVE_PLAYLIST:
      return {
        ...state,
        playlist: action.currentPlaylist,
      }
    case type.PLAY_SONG:
      return {
        ...state,
        songIndex: action.songIndex,
        audioUrl: action.audioUrl,
        currentSong: action.song
      }
    case type.ON_PLAY:
      return {
        ...state,
        isPlaying: true
      }
    case type.ON_PAUSE:
      return {
        ...state,
        isPlaying: false
      }
    default:
      return state
  }
}

const searchInitialState = {
  loadingSearch: false,
  results: [],
  nextUrl: null,
}

const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    case type.LOADING_SEARCH:
      return {
        ...state,
        loadingSearch: true,
        results: []
      }
    case type.LOADING_SEARCH_NEXT:
      return {
        ...state,
        loadingSearch: true,
      }
    case type.LOADED_SEARCH:
      return {
        ...state,
        loadingSearch: false,
        results: [...state.results, ...action.playlist],
        nextUrl: action.nextUrl
      }
    default:
      return state;
  }
}

export default combineReducers({
  root: rootReducer,
  search: searchReducer,
  playlist: playlistReducer
})