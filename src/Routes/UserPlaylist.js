import { connect } from "react-redux"
import { WithActions } from "./Container"

import { play_song_from_btn, remove_from_playlist } from "../store/actions"

const Playlist = WithActions(null, false, true)

const state = ({ userPlaylist }) => ({
  playlist: userPlaylist.playlist
})

const actions = {
  playSong: play_song_from_btn,
  playlistAction: remove_from_playlist
}

export default connect(state, actions)(Playlist)
