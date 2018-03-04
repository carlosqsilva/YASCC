// import { h, Component } from "preact"
import { connect } from "react-redux"
// import styled from "styled-components"
import { WithActions } from "./Container"

import { play_song_from_btn, remove_from_playlist } from "../store/actions"

//   @media screen and (min-width: 500px) {
//     margin: 30px;
//     font-size: 35px;
//   }
// `

const Playlist = WithActions(null)

const state = ({ userPlaylist }) => ({
  playlist: userPlaylist.playlist
})

const actions = {
  playSong: play_song_from_btn,
  playlistAction: remove_from_playlist
}

export default connect(state, actions)(Playlist)
