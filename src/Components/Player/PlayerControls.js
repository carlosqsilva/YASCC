import { h } from "preact"
import { connect } from "preact-redux"
import { Icon } from "../Utils/Icon"
import styled from "styled-components"
import Item from "../Utils/Item"

import { play_next, play_prev } from "@/store/actions"

import spin from "./loading.svg"
import play from "./play.svg"
import back from "./back.svg"
import next from "./next.svg"
import pause from "./pause.svg"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
`

const PlayerControls = ({ playing, playNext, playPrev, loading, toggle }) => (
  <Wrapper>
    <Item link noMobile onClick={playPrev}>
      <Icon src={back} size={30} />
    </Item>
    <Item link onClick={toggle}>
      {loading ? (
        <Icon src={spin} size={30} />
      ) : (
        <Icon src={playing ? pause : play} size={30} />
      )}
    </Item>
    <Item link noMobile onClick={playNext}>
      <Icon src={next} size={30} />
    </Item>
  </Wrapper>
)

const state = ({ playlist }) => ({
  playing: playlist.isPlaying,
  loading: playlist.loading
})

const actions = {
  playNext: play_next,
  playPrev: play_prev
}

export default connect(state, actions)(PlayerControls)
