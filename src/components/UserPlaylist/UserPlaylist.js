import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {
  play_song_from_btn,
  remove_from_playlist
} from '../../store/actions'

import { SongCard, CardContainer } from '../SongCard/SongCard'
import { Container } from '../InfiniteScroll/InfiniteScroll'

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

const UserPlaylist = (props) => {

  const {
    playlist,
  } = props.state

  return (
    <Wrapper>
      <Header>
        Playlist
      </Header>
      <Container loadMore={props.loadMore} >
        <CardContainer>
          {
            playlist.map( (song, index) => 
              <SongCard 
                song={{...song, index}}
                from="/playlist"
                play={props.playSong}
                playlistAction={props.removeSong}
                key={song.id} />
            )
          }
        </CardContainer>
      </Container>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  state: state.userPlaylist
})

const mapDispatchToProps = dispatch => ({
  playSong: (index, location) => dispatch(play_song_from_btn(index, location)),
  removeSong: (song) => dispatch(remove_from_playlist(song))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylist)