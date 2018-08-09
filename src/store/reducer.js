import { combineReducers } from "redux"
import * as type from "../actions/constants"

const rootInitialState = {
  sidebarVisible: false,
  darkMode: false,
  online: true,
  ready: false
}

const rootReducer = (state = rootInitialState, action) => {
  switch (action.type) {
    case type.INITIAL_LOAD:
      return {
        ...state,
        ready: true
      }
    case type.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarVisible: !state.sidebarVisible
      }
    case type.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      }
    case type.ONLINE:
      return {
        ...state,
        online: true
      }
    case type.OFFLINE:
      return {
        ...state,
        online: false
      }
    default:
      return state
  }
}

const playerInitialState = {
  playlist: [],
  isPlaying: false,
  loading: false,
  audioUrl: null,
  active: null,
  index: null,
  song: null,
  volume: 1,
  repeat: false,
  duration: 0,
  muted: false,
  time: 0
}

const playerReducer = (state = playerInitialState, action) => {
  switch (action.type) {
    case type.ACTIVE_PLAYLIST:
      return {
        ...state,
        playlist: action.playlist
      }
    case type.PLAY_SONG:
      return {
        ...state,
        index: action.index,
        audioUrl: action.audioUrl,
        song: action.song,
        active: action.song.id
      }
    case type.ON_LOAD_START:
      return {
        ...state,
        loading: true
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
    case type.TOGGLE_MUTE:
      return {
        ...state,
        muted: !state.muted
      }
    case type.TOGGLE_REPEAT:
      return {
        ...state,
        repeat: !state.repeat
      }
    case type.ON_TIME_UPDATE:
      return {
        ...state,
        time: action.time
      }
    case type.ON_VOLUME_CHANGE:
      return {
        ...state,
        volume: action.volume,
        muted: action.volume === "0" ? true : false
      }
    case type.ON_LOADED_METADATA:
      return {
        ...state,
        loading: false,
        duration: action.duration
      }
    default:
      return state
  }
}

export const playlistReducer = (
  state = {
    loading: true,
    nextSearch: "",
    nextPlaylist: "",
    playlist: [],
    search: [],
    recent: [],
    user: [],
    qtd: 0
  },
  action
) => {
  switch (action.type) {
    case type.INITIAL_LOAD:
      if (action.playlist) {
        return {
          ...state,
          user: action.playlist,
          qtd: action.playlist.length
        }
      } else return state
    case type.LOAD_RECENT_PLAYED:
      return {
        ...state,
        recent: action.recent
      }
    case type.ADD_TO_PLAYLIST:
      const user = [...state.user, action.song]
      return {
        ...state,
        qtd: user.length,
        user
      }
    case type.REMOVE_FROM_PLAYLIST:
      return {
        ...state,
        user: action.playlist,
        qtd: action.playlist.length
      }
    case type.PLAYLIST_LOADING:
      return {
        ...state,
        loading: true,
        playlist: []
      }
    case type.PLAYLIST_LOADING_NEXT:
    case type.SEARCH_LOADING_NEXT:
      return {
        ...state,
        loading: true
      }
    case type.PLAYLIST_LOADED:
      return {
        ...state,
        loading: false,
        playlist: [...state.playlist, ...action.playlist],
        nextPlaylist: action.next
      }
    case type.SEARCH_LOADING:
      return {
        ...state,
        loading: true,
        search: []
      }
    case type.SEARCH_LOADED:
      return {
        ...state,
        loading: false,
        search: [...state.search, ...action.playlist],
        nextSearch: action.next
      }
    default:
      return state
  }
}

export default combineReducers({
  root: rootReducer,
  playlist: playlistReducer,
  player: playerReducer
})
