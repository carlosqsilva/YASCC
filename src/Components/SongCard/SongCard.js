import { h } from "preact"
import styled from "styled-components"
import Icon, { WithTooltip } from "../Utils/Icon"
import Play from "./play.svg"
import Add from "./add.svg"
import Remove from "./remove.svg"

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  border-radius: 4px;
  padding: 10px;

  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
`

const Artwork = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 65px;

  > img {
    display: none;
  }

  @media screen and (min-width: 500px) {
    > img {
      opacity: 0;
      transform: scale(0);
      transition: all 200ms ease;

      width: 100%;
      margin: 20px auto;
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

const Info = styled.div`
  margin-left: 5px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  > a {
    color: #444;
    font-size: 0.75rem;
    &:first-child {
      font-size: 0.8rem;
    }
  }
`

const Wrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Duration = styled.span`
  margin-right: 15px;
  color: #444;
  font-size: 0.8rem;
`

export const CardContainer = styled.div`
  position: relative;
  padding-bottom: 60px;
  margin-bottom: 40px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 85px;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, 310px);
    grid-auto-rows: 85px;
    grid-gap: 15px;
  }
`

export const SongCard = ({ song, from, index, play, playlistAction }) => {
  const { title, user, artwork, duration } = song
  const fromPlaylist = from === "/playlist"
  return (
    <Card onClick={() => play(index)}>
      <Artwork style={{ backgroundImage: `url(${artwork})` }}>
        <Icon src={Play} size={30} />
      </Artwork>

      <Info>
        <a>{title}</a>
        <a>{user}</a>
      </Info>

      <Wrapper>
        <Duration>{duration}</Duration>
        <WithTooltip
          tooltip={fromPlaylist ? "Remove from Playlist" : "Add to Playlist"}
        >
          <Icon
            onClick={e => playlistAction(e)(song)}
            size={15}
            alt=""
            src={fromPlaylist ? Remove : Add}
          />
        </WithTooltip>
      </Wrapper>
    </Card>
  )
}
