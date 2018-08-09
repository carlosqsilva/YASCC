import { connect } from "preact-redux"
import { WithActions } from "./Container"

import {
  play_song_from_btn,
  add_to_playlist,
  load_recent_played
} from "@/actions"

const Recent = WithActions({})

const state = ({
  playlist: { recent },
  player: { active },
  root: { ready }
}) => ({
  playlist: recent,
  active,
  ready
})

const actions = {
  playSong: play_song_from_btn,
  playlistAction: add_to_playlist,
  onMounted: load_recent_played
}

export default connect(
  state,
  actions
)(Recent)
