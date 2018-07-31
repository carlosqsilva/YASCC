import { h } from "preact"
import { connect } from "preact-redux"
import { Icon, SVGIcon } from "../Utils/Icon"
import styled from "styled-components"
import Item from "../Utils/Item"

import {
  toggle_mute,
  play_next,
  play_prev,
  toggle_repeat,
  change_volume
} from "@/store/actions"

import spinIcon from "./loading.svg"
import playIcon from "./play.svg"
import backIcon from "./back.svg"
import nextIcon from "./next.svg"
import pauseIcon from "./pause.svg"
import mutedIcon from "./mute.svg"
import volumeIcon from "./volume.svg"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.primary};
`

const Volume = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  right: 0px;
  height: 120px;
  background: ${props => props.theme.light};
  opacity: 0;
  transition: all 200ms;
`

const InputRange = styled.input.attrs({
  type: "range",
  min: 0,
  max: 1,
  step: 0.05
})`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  width: 100px;
  height: 10px;
  border-radius: 5px;
  background: ${props => props.theme.rangerTrack};
  transform: rotate(270deg) translateX(-50%) translateY(-20px);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${props => props.theme.info};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${props => props.theme.info};
    cursor: pointer;
  }
`

const Container = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  position: relative;

  &:hover {
    ${Volume} {
      opacity: 1;
      transform: translateY(-99.5%);
    }
  }
`

const PlayerControls = ({
  playing,
  playNext,
  playPrev,
  toggleMute,
  toggleRepeat,
  loading,
  toggle,
  repeat,
  muted,
  changeVolume
}) => (
  <Wrapper>
    <Item noMobile onClick={playPrev}>
      <Icon src={backIcon} size={30} />
    </Item>

    <Item onClick={toggle}>
      {loading ? (
        <Icon src={spinIcon} size={30} />
      ) : (
        <Icon src={playing ? pauseIcon : playIcon} size={30} />
      )}
    </Item>

    <Item noMobile onClick={playNext}>
      <Icon src={nextIcon} size={30} />
    </Item>

    <Item noMobile onClick={toggleRepeat}>
      <SVGIcon size={30} active={repeat}>
        <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
      </SVGIcon>
    </Item>

    <Container>
      <Item noMobile onClick={toggleMute}>
        <Icon src={muted ? mutedIcon : volumeIcon} size={30} />
      </Item>
      <Volume>
        <InputRange onChange={changeVolume} />
      </Volume>
    </Container>
  </Wrapper>
)

const state = ({ playlist: { isPlaying, loading, repeat, muted } }) => ({
  playing: isPlaying,
  loading,
  repeat,
  muted
})

const actions = {
  playNext: play_next,
  playPrev: play_prev,
  toggleMute: toggle_mute,
  toggleRepeat: toggle_repeat,
  changeVolume: change_volume
}

export default connect(
  state,
  actions
)(PlayerControls)
