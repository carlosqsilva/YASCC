// import { h, Component } from "preact"
import { connect } from "react-redux"
import { WithActions } from "./Container"

import {
  load_next_results,
  add_to_playlist,
  play_song_from_btn
} from "../store/actions"

const Search = WithActions(null, true)

const state = ({ search }) => ({
  playlist: search.results,
  loading: search.loadingSearch
})

const actions = {
  loadMore: load_next_results,
  playSong: play_song_from_btn,
  playlistAction: add_to_playlist
}

export default connect(state, actions)(Search)
