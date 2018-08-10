import { h } from "preact"
import { connect } from "preact-redux"
import styled from "styled-components"

import { Icon } from "../Utils/Icon"
import Item from "../Utils/Item"
import InputRange from "./InputRange"

import mutedIcon from "./mute.svg"
import volumeIcon from "./volume.svg"

const Wrapper = styled.div`
  padding: 0 0.5rem;
  display: flex;
  width: 10rem;
  /* align-items: center; */

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const VolumeControl = ({ toggleMute, muted, ...props }) => (
  <Wrapper>
    <Item onClick={toggleMute}>
      <Icon src={muted ? mutedIcon : volumeIcon} size={20} />
    </Item>
    <InputRange full step="0.05" value="1" max="1" {...props} />
  </Wrapper>
)

const state = ({ player: { muted } }) => ({
  muted
})

export default connect(state)(VolumeControl)
