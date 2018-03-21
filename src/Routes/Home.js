import { connect } from "react-redux"
import {
  load_playlist_next,
  add_to_playlist,
  play_song_from_btn
} from "../store/actions"

import { WithActions } from "./Container"

const Home = WithActions(null, true)

const state = ({ root, playlist }, ownProps) => {
  if (playlist.location === ownProps.location.pathname) {
    if (playlist.currentSong !== null) {
      return {
        playlist: root.playlist,
        loading: root.loadingPlaylist,
        active: playlist.songIndex
      }
    }
  }
  return {
    playlist: root.playlist,
    loading: root.loadingPlaylist,
    active: null
  }
}

const actions = {
  loadMore: load_playlist_next,
  playSong: play_song_from_btn,
  playlistAction: add_to_playlist
}

export default connect(state, actions)(Home)
