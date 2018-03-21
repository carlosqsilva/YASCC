import { h } from "preact"
import styled from "styled-components"
import { Icon, WithTooltip } from "../Utils/Icon"
import Play from "./play.svg"
import Add from "./add.svg"
import like from "./like.svg"
import Remove from "./remove.svg"

const PlayIcon = Icon.extend`
  display: none;

  @media screen and (min-width: 500px) {
    opacity: 0;
    transition: transform 200ms ease;
    margin: auto;
    display: block;
    transform: scale(0.1);
  }
`

const Card = styled.div`
  background: ${props => (props.active ? "transparent" : "white")};
  position: relative;
  cursor: pointer;
  padding: 8px;
  display: flex;

  @media screen and (min-width: 500px) {
    border-radius: 4px;
  }

  &:hover {
    ${PlayIcon} {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const Artwork = styled.div`
  background-size: cover;
  background-position: center;
  display: flex;
  min-width: 60px;
  min-height: 60px;
`

const Container = styled.div`
  position: relative;
  margin: 0 0 0 5px;
  overflow: hidden;
  flex: 1;

  @media screen and (min-width: 500px) {
    overflow: initial;
  }
`

const Artist = styled.p`
  color: #777;
  font-size: 0.8rem;
`

const Music = styled.p`
  color: #444;
  font-size: 0.85rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media screen and (min-width: 500px) {
    width: 180px;
  }
`

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
`

const Info = styled.span`
  margin: 0 10px 0 3px;
  font-size: 0.7rem;
  color: #666;
`

const Duration = styled.span`
  font-size: 0.8rem;
  color: #666;
  flex: 1;
`

export const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, 260px);
    grid-gap: 15px;
  }
`

export const SongCard = fromPlaylist => {
  const option = fromPlaylist ? Remove : Add
  const message = fromPlaylist ? "Remove from Playlist" : "Add to Playlist"
  return ({ song, index, play, playlistAction, active }) => (
    <Card onClick={() => play(index)} active={active}>
      <Artwork style={{ backgroundImage: `url(${song.artwork})` }}>
        <PlayIcon src={Play} size={30} />
      </Artwork>

      <Container>
        <Music title={song.title}>{song.title}</Music>
        <Artist>{song.user}</Artist>

        <Wrapper>
          <Duration>{song.duration}</Duration>

          <WithTooltip tooltip={`${song.likesCount} likes`}>
            <Icon src={like} size={9} alt="" />
            <Info>{song.likesCountMin}</Info>
          </WithTooltip>

          <WithTooltip tooltip={message}>
            <Icon
              onClick={e => playlistAction(e)(song)}
              src={option}
              style={{ marginTop: "1px" }}
              size={16}
            />
          </WithTooltip>
        </Wrapper>
      </Container>
    </Card>
  )
}
