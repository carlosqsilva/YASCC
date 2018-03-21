import * as type from "./constants"

const rootInitialState = {
  sidebarVisible: false,
  loadingPlaylist: true,
  isPlaying: false,
  playlist: [],
  online: true
}

const rootReducer = (state = rootInitialState, action) => {
  switch (action.type) {
    case type.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarVisible: !state.sidebarVisible
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
        loadingPlaylist: true
      }
    case type.PLAYLIST_LOADED:
      return {
        ...state,
        loadingPlaylist: false,
        playlist: [...state.playlist, ...action.playlist]
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

const playlistInitialState = {
  playlist: [],
  songIndex: null,
  audioUrl: null,
  currentSong: null,
  isPlaying: false,
  location: ""
}

const playlistReducer = (state = playlistInitialState, action) => {
  switch (action.type) {
    case type.ACTIVE_PLAYLIST:
      return {
        ...state,
        playlist: action.currentPlaylist,
        location: action.location
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
  results: []
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
        loadingSearch: true
      }
    case type.LOADED_SEARCH:
      return {
        ...state,
        loadingSearch: false,
        results: [...state.results, ...action.playlist]
      }
    default:
      return state
  }
}

export const userPlaylistReducer = (
  state = {
    playlist: []
  },
  action
) => {
  switch (action.type) {
    case type.ADD_TO_PLAYLIST:
      return {
        playlist: [...state.playlist, action.song]
      }
    case type.REMOVE_FROM_PLAYLIST:
      return {
        playlist: action.playlist
      }
    default:
      return state
  }
}

export default {
  root: rootReducer,
  search: searchReducer,
  playlist: playlistReducer,
  userPlaylist: userPlaylistReducer
}
