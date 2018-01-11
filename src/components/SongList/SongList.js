import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  load_playlist_next,
  play_song_from_btn
} from '../../store/actions'

import Loading from '../Loading/Loading';
import SongCard from '../SongCard/SongCard'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 1900px) 1fr;
  padding: 10px;
  height: 100%;
  overflow-y: scroll;

  @media screen and (min-width: 500px) {
    padding: 15px;
  }
`

const Container = styled.div`
  position: relative;
  padding-bottom: 80px;
  grid-column: 2;
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

class SongList extends React.Component {

  handleScroll = (e) => {
    const {scrollTop, scrollHeight, clientHeight } = e.target
    if ((scrollTop + clientHeight) > (scrollHeight - 50)) {
      this.props.loadNextSongs()
    }
  }

  render () {
    const {
      playlist,
      loadingPlaylist
    } = this.props.state

    return (
      <Wrapper onScroll={this.handleScroll}>
        <Container>
          {
            playlist.map( (song, index) => 
              <SongCard 
                song={{...song, index}} 
                play={this.props.playSong}
                key={song.id} />
            )
          }
        <Loading 
          isLoading={loadingPlaylist}
          loadMore={this.props.loadNextSongs}
        />
        </Container>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  loadNextSongs: () => dispatch(load_playlist_next()),
  playSong: (index, url) => dispatch(play_song_from_btn(index, url))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongList)