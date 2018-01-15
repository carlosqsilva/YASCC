import * as type from './constants'
import { combineReducers } from 'redux'

const rootInitialState = {
  sidebarVisible: false,
  loadingPlaylist: true,
  isPlaying: false,
  playlist: [],
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

export const userPlaylistReducer = (
  state = {
    playlist: [],
    num: 0,
  }, action) => {
  switch (action.type) {
    case type.ADD_TO_PLAYLIST:
      return {
        playlist: [...state.playlist, action.song],
        num: state.num + 1
      }
    case type.REMOVE_FROM_PLAYLIST:
      return {
        playlist: action.playlist,
        num: state.num - 1
      }
    default:
      return state
  }
}

export default combineReducers({
  root: rootReducer,
  search: searchReducer,
  playlist: playlistReducer,
  userPlaylist: userPlaylistReducer
})