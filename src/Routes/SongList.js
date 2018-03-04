// import { h, Component } from "preact"
import { connect } from "react-redux"
import {
  load_playlist_next,
  add_to_playlist,
  play_song_from_btn
} from "../store/actions"

import { WithActions } from "./Container"

const Home = WithActions(null, true)

const state = ({ root }) => ({
  playlist: root.playlist,
  loading: root.loadingPlaylist
})

const actions = {
  loadMore: load_playlist_next,
  playSong: play_song_from_btn,
  playlistAction: add_to_playlist
}

export default connect(state, actions)(Home)
