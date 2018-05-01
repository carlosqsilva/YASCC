import { connect } from "preact-redux"
import { WithActions } from "./Container"

import {
  load_next_results,
  add_to_playlist,
  play_song_from_btn
} from "../store/actions"

const Search = WithActions(null, true)

const state = ({ search, playlist }, ownProps) => {
  let active = null
  if (playlist.location === ownProps.location.pathname) {
    if (playlist.currentSong !== null) {
      active = playlist.currentSong.id
    }
  }
  return {
    playlist: search.results,
    loading: search.loadingSearch,
    active
  }
}

const actions = {
  loadMore: load_next_results,
  playSong: play_song_from_btn,
  playlistAction: add_to_playlist
}

export default connect(state, actions)(Search)
