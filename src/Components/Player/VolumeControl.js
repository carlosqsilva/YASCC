import { h } from "preact";
import { forwardRef } from "preact/compat";
import { connect } from "react-redux";
import styled from "styled-components";

import { Icon } from "../Utils/Icon";
import Item from "../Utils/Item";
import InputRange from "./InputRange";

import mutedIcon from "./mute.svg";
import volumeIcon from "./volume.svg";

const Wrapper = styled.div`
  padding: 0 0.5rem;
  display: flex;
  width: 10rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const state = ({ player: { muted } }) => ({
  muted
});

const WrappedIcon = connect(state)(({ muted }) => (
  <Icon src={muted ? mutedIcon : volumeIcon} size={20} />
));

export default forwardRef(({ toggleMute, ...props }, ref) => (
  <Wrapper>
    <Item onClick={toggleMute}>
      <WrappedIcon />
    </Item>
    <InputRange full step="0.05" value="1" max="1" {...props} ref={ref} />
  </Wrapper>
));
