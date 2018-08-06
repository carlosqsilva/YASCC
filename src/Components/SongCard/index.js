import { h } from "preact"
import styled from "styled-components"

import { Icon } from "../Utils/Icon"

import Play from "./play.svg"
import Like from "./like.svg"
import Playing from "./playing.svg"
import Remove from "./remove.svg"
import Add from "./add.svg"

const PlayIcon = Icon.extend`
  opacity: 0;
  margin: auto;
  display: block;
`

const PlaylistAction = styled.img`
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 10;
  will-change: transform;
  transform: translateX(115%);
  transition: transform 200ms;
`

const Card = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  padding: 6px;
  display: flex;
  background: var(--primary);

  @media screen and (min-width: 500px) {
    border-radius: 4px;
  }

  &:hover {
    #action {
      transform: translateX(0);
    }
    #play {
      opacity: 1;
    }
  }

  ${props =>
    props.active &&
    `
    #action {
      transform: translateX(0);
    }
    #play {
      opacity: 1;
    }
  `};
`

const Artwork = styled.div`
  background-size: cover;
  background-position: center;
  display: flex;
  width: 67px;
  height: 67px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  overflow: hidden;
  flex: 1;
`

const Artist = styled.p`
  color: var(--textGray);
  font-size: 0.8rem;
`

const Music = styled.p`
  color: var(--secondary);
  font-size: 0.9rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`

const Info = styled.span`
  flex: ${props => (props.flex ? 1 : 0)};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  color: var(--textGray);

  &:not(:first-child) {
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 290px);
    grid-gap: 15px;
  }
`

export const SongCard = fromPlaylist => {
  const option = fromPlaylist ? Remove : Add
  const message = fromPlaylist ? "Remove from Playlist" : "Add to Playlist"
  return ({ song, play, playlistAction, active }) => (
    <Card onClick={play} active={active}>
      <PlaylistAction
        onClick={playlistAction}
        title={message}
        src={option}
        id="action"
        size={24}
      />

      <Artwork style={{ background: `url(${song.artwork})` }}>
        <PlayIcon src={active ? Playing : Play} id="play" size={40} />
      </Artwork>

      <Container>
        <Artist>{song.user}</Artist>
        <Music title={song.title}>{song.title}</Music>
        <Wrapper>
          <Info flex>{song.duration}</Info>
          <Icon src={Like} size={12} />
          <Info title={`${song.likesCount} likes`}>{song.likesCountMin}</Info>
        </Wrapper>
      </Container>
    </Card>
  )
}
