import { connect } from "preact-redux"
import { WithActions } from "./Container"

import { play_song_from_btn, remove_from_playlist } from "@/actions"

const Playlist = WithActions(null, false, true)

const state = ({ userPlaylist, playlist }, ownProps) => {
  let active = null
  if (playlist.location === ownProps.location.pathname) {
    if (playlist.currentSong !== null) {
      active = playlist.currentSong.id
    }
  }
  return {
    playlist: userPlaylist.playlist,
    active
  }
}

const actions = {
  playSong: play_song_from_btn,
  playlistAction: remove_from_playlist
}

export default connect(
  state,
  actions
)(Playlist)
