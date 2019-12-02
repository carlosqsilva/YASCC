import { h } from "preact";
import { connect } from "react-redux";
import styled from "styled-components";

import Item from "../Utils/Item";
import { Icon, SVGIcon } from "../Utils/Icon";
import { play_next, play_prev, toggle_shuffle } from "@/actions";

import spinIcon from "./loading.svg";
import playIcon from "./play.svg";
import backIcon from "./back.svg";
import nextIcon from "./next.svg";
import pauseIcon from "./pause.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: var(--primary);
`;

const PlayerControls = ({
  isPlaying,
  playNext,
  playPrev,
  toggleLoop,
  toggleShuffle,
  shuffle,
  loading,
  toggle,
  loop
}) => (
  <Wrapper>
    <Item noMobile onClick={toggleShuffle}>
      <SVGIcon size={20} active={shuffle}>
        <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
      </SVGIcon>
    </Item>

    <Item noMobile onClick={playPrev}>
      <Icon src={backIcon} size={40} />
    </Item>

    <Item onClick={toggle}>
      {loading ? (
        <Icon src={spinIcon} size={40} />
      ) : (
        <Icon src={isPlaying ? pauseIcon : playIcon} size={40} />
      )}
    </Item>

    <Item noMobile onClick={playNext}>
      <Icon src={nextIcon} size={40} />
    </Item>

    <Item noMobile onClick={toggleLoop}>
      <SVGIcon size={20} active={loop}>
        <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
      </SVGIcon>
    </Item>
  </Wrapper>
);

const state = ({ player: { isPlaying, loading, loop, shuffle } }) => ({
  isPlaying,
  loading,
  loop,
  shuffle
});

const actions = {
  playNext: play_next,
  playPrev: play_prev,
  toggleShuffle: toggle_shuffle
};

export default connect(state, actions)(PlayerControls);
