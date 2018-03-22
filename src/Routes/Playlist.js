import { connect } from "react-redux"
import { WithActions } from "./Container"

import { play_song_from_btn, remove_from_playlist } from "../store/actions"

const Playlist = WithActions(null, false, true)

const state = ({ userPlaylist, playlist }, ownProps) => {
  if (playlist.location === ownProps.location.pathname) {
    if (playlist.currentSong !== null) {
      return {
        playlist: userPlaylist.playlist,
        active: playlist.currentSong.id
      }
    }
  }
  return {
    playlist: userPlaylist.playlist,
    active: null
  }
}

const actions = {
  playSong: play_song_from_btn,
  playlistAction: remove_from_playlist
}

export default connect(state, actions)(Playlist)
