import { h, Component } from "preact"
import { connect } from "react-redux"
import styled from "styled-components"

import { play_song_from_btn, remove_from_playlist } from "../../store/actions"

import { SongCard, CardContainer } from "../SongCard/SongCard"
import { Container } from "../InfiniteScroll/InfiniteScroll"

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const Header = styled.div`
  margin: 20px;
  font-size: 20px;
  letter-spacing: 6px;
  color: #444;

  @media screen and (min-width: 500px) {
    margin: 30px;
    font-size: 35px;
  }
`

class UserPlaylist extends Component {
  playSong = index => {
    this.props.playSong(index, this.props.location.pathname)
  }

  playlistAction = e => song => {
    if (!e) e = window.event
    if (e.stopPropagation) e.stopPropagation()
    this.props.removeSong(song)
  }

  render({ playlist, location }) {
    const path = location.pathname
    return (
      <Wrapper>
        <Header>Playlist</Header>
        <Container>
          <CardContainer>
            {playlist.map((song, index) => (
              <SongCard
                from={path}
                song={song}
                index={index}
                playlistAction={this.playlistAction}
                play={this.playSong}
                key={song.id}
              />
            ))}
          </CardContainer>
        </Container>
      </Wrapper>
    )
  }
}

const state = ({ userPlaylist }) => ({
  playlist: userPlaylist.playlist
})

const actions = {
  playSong: play_song_from_btn,
  removeSong: remove_from_playlist
}

export default connect(state, actions)(UserPlaylist)
