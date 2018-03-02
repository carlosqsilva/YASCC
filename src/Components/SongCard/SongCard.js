import { h } from "preact"
import styled from "styled-components"
import Icon, { WithTooltip } from "../Utils/Icon"
import Play from "./play.svg"
import Add from "./add.svg"
import like from "./like.svg"
import Remove from "./remove.svg"

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  background: white;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`

const Artwork = styled.div`
  background-size: cover;
  background-position: center;
  display: flex;
  min-width: 60px;
  min-height: 60px;

  > img {
    display: none;
  }

  @media screen and (min-width: 500px) {
    > img {
      opacity: 0;
      transform: scale(0);
      transition: all 200ms ease;
      margin: auto;
      display: block;
    }

    &:hover {
      > img {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`

const Container = styled.div`
  overflow: hidden;
  margin: 0 0 0 5px;
  position: relative;
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
  padding-bottom: 60px;
  margin-bottom: 40px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, 260px);
    grid-gap: 15px;
  }
`

export const SongCard = ({ song, from, index, play, playlistAction }) => {
  const { title, user, artwork, duration, likesCount, likesCountMin } = song
  const fromPlaylist = from === "/playlist"
  return (
    <Card onClick={() => play(index)}>
      <Artwork style={{ backgroundImage: `url(${artwork})` }}>
        <Icon src={Play} size={30} />
      </Artwork>

      <Container>
        <Music title={title}>{title}</Music>
        <Artist>{user}</Artist>

        <Wrapper>
          <Duration>{duration}</Duration>

          <WithTooltip tooltip={`${likesCount} likes`}>
            <Icon src={like} size={9} alt="" />
            <Info>{likesCountMin}</Info>
          </WithTooltip>

          <WithTooltip
            tooltip={fromPlaylist ? "Remove from Playlist" : "Add to Playlist"}
          >
            <Icon
              onClick={e => playlistAction(e)(song)}
              src={fromPlaylist ? Remove : Add}
              style={{ marginTop: "1px" }}
              size={16}
              alt=""
            />
          </WithTooltip>
        </Wrapper>
      </Container>
    </Card>
  )
}
