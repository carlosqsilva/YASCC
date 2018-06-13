import { h } from "preact"
import { connect } from "preact-redux"
import { Icon, SVGIcon } from "../Utils/Icon"
import styled from "styled-components"
import Item from "../Utils/Item"

import {
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
import volumeIcon from "./volume.svg"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.primary};
`

const Volume = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0px;
  right: 0px;
  height: 120px;
  background: ${props => props.theme.light};
  opacity: 0;
  transform: translateY(50%);
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

const Container = Item.extend`
  position: relative;
  &:hover {
    ${Volume} {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`

const PlayerControls = ({
  playing,
  playNext,
  playPrev,
  toggleRepeat,
  loading,
  toggle,
  repeat,
  volume,
  changeVolume
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

    <Container link>
      <Icon src={volumeIcon} size={30} />
      <Volume>
        <InputRange onChange={changeVolume} value={volume} />
      </Volume>
    </Container>
  </Wrapper>
)

const state = ({ playlist }) => ({
  playing: playlist.isPlaying,
  loading: playlist.loading,
  repeat: playlist.repeat,
  volume: playlist.volume
})

const actions = {
  playNext: play_next,
  playPrev: play_prev,
  toggleRepeat: toggle_repeat,
  changeVolume: change_volume
}

export default connect(
  state,
  actions
)(PlayerControls)
