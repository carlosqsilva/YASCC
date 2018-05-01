import { h } from "preact"
import styled, { css } from "styled-components"
import { Icon } from "../Utils/Icon"
import Play from "./play.svg"
import Like from "./like.svg"
import Playing from "./playing.svg"
import Remove from "./remove.svg"
import Add from "./add.svg"

const PlayIcon = Icon.extend`
  opacity: 0;
  transition: transform 200ms ease;
  margin: auto;
  display: block;
  transform: scale(0.1);
`

const PlaylistAction = Icon.extend`
  opacity: 0;
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 5;
  transition: transform 200ms ease-in-out, opacity 200ms;
  transform: translateX(100%);
  &:hover {
    border: 1px solid transparent;
  }
`

const Active = css`
  ${PlayIcon} {
    opacity: 1;
    transform: scale(1);
  }
  ${PlaylistAction} {
    opacity: 1;
    transform: translateX(0);
  }
`

const Card = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  padding: 6px;
  display: flex;
  background: #fff;

  ${props => props.active && Active};

  @media screen and (max-width: 499px) {
    ${PlaylistAction} {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 500px) {
    border-radius: 4px;
    &:hover {
      ${Active};
    }
  }
`

const Artwork = styled.div`
  background-size: cover;
  background-position: center;
  display: flex;
  width: 67px;
  height: 67px;
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  overflow: hidden;
  flex: 1;
`

const Artist = styled.p`
  color: #777;
  font-size: 0.8rem;
`

const Music = styled.p`
  color: #444;
  font-size: 0.85rem;
  @media screen and (min-width: 500px) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`

const Info = styled.span`
  align-self: center;
  margin-right: 5px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  color: #666;
`

const Duration = Info.extend`
  flex: 1;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 290px);
    grid-gap: 15px;
  }
`

export const SongCard = fromPlaylist => {
  const option = fromPlaylist ? Remove : Add
  const message = fromPlaylist ? "Remove from Playlist" : "Add to Playlist"
  return ({ song, index, play, playlistAction, active }) => (
    <Card onClick={() => play(index)} active={active}>
      <PlaylistAction
        onClick={e => playlistAction(e)(song)}
        title={message}
        src={option}
        size={24}
      />

      <Artwork style={{ backgroundImage: `url(${song.artwork})` }}>
        <PlayIcon src={active ? Playing : Play} size={40} />
      </Artwork>

      <Container>
        <Artist>{song.user}</Artist>
        <Music title={song.title}>{song.title}</Music>
        <Wrapper>
          <Duration>{song.duration}</Duration>
          <Info title={`${song.likesCount} likes`}>
            <Icon src={Like} size={14} />
            {song.likesCountMin}
          </Info>
        </Wrapper>
      </Container>
    </Card>
  )
}
