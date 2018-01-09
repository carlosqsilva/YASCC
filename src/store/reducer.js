import {
  TOGGLE_SIDEBAR,
  HIDE_SIDEBAR,
  ON_LOAD_START,
  ON_PLAY,
  ON_PAUSE,
  ON_TIME_UPDATE,
  PLAY_SONG,
  ON_LOADED_METADATA,
  PLAYLIST_LOADING,
  PLAYLIST_LOADED
} from './constants'

const initialState = {
  sidebarVisible: true,
  loadingPlaylist: true,
  currentTime: 0,
  duration: 0,
  isPlaying: false,
  songIndex: null,
  playlist: [],
  favorites: null,
  userPlaylist: null,
  audioUrl: null,
  nextUrl: null
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarVisible: !state.sidebarVisible
      }
    case HIDE_SIDEBAR:
      return {
        ...state,
        sidebarVisible: false
      }
    case PLAYLIST_LOADING:
      return {
        ...state,
        loadingPlaylist: true
      }
    case PLAYLIST_LOADED:
      return {
        ...state,
        loadingPlaylist: false,
        playlist: [...state.playlist, ...action.playlist],
        nextUrl: action.nextUrl
      }
    case ON_LOAD_START:
      return {
        ...state,
        currentTime: 0,
        duration: 0
      }
    case ON_LOADED_METADATA:
      return {
        ...state,
        duration: action.duration
      }
    case ON_PLAY:
      return {
        ...state,
        isPlaying: true
      }
    case ON_PAUSE:
      return {
        ...state,
        isPlaying: false
      }
    case ON_TIME_UPDATE:
      return {
        ...state,
        currentTime: action.currentTime
      }
    case PLAY_SONG:
      return {
        ...state,
        songIndex: action.songIndex,
        audioUrl: action.audioUrl
      }
    default:
      return state;
  }
}

export default rootReducer;