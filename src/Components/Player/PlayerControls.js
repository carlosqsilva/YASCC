import { h } from "preact"
import { connect } from "preact-redux"
import { Icon, SVGIcon } from "../Utils/Icon"
import styled from "styled-components"
import Item from "../Utils/Item"

import { play_next, play_prev, toggle_repeat } from "@/store/actions"

import spinIcon from "./loading.svg"
import playIcon from "./play.svg"
import backIcon from "./back.svg"
import nextIcon from "./next.svg"
import pauseIcon from "./pause.svg"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
`

const PlayerControls = ({
  playing,
  playNext,
  playPrev,
  toggleRepeat,
  loading,
  toggle,
  repeat
}) => (
  <Wrapper>
    <Item link noMobile onClick={playPrev}>
      <Icon src={backIcon} size={30} />
    </Item>
    <Item link onClick={toggle}>
      {loading ? (
        <Icon src={spinIcon} size={30} />
      ) : (
        <Icon src={playing ? pauseIcon : playIcon} size={30} />
      )}
    </Item>
    <Item link noMobile onClick={playNext}>
      <Icon src={nextIcon} size={30} />
    </Item>
    <Item link noMobile onClick={toggleRepeat}>
      <SVGIcon size={30} active={repeat}>
        <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
      </SVGIcon>
    </Item>
  </Wrapper>
)

const state = ({ playlist }) => ({
  playing: playlist.isPlaying,
  loading: playlist.loading,
  repeat: playlist.repeat
})

const actions = {
  playNext: play_next,
  playPrev: play_prev,
  toggleRepeat: toggle_repeat
}

export default connect(
  state,
  actions
)(PlayerControls)
