import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Icon from '../Utils/Icon'
import Play from './play.svg'
import Add from './add.svg'

import {
  load_playlist_next,
  play_song_from_btn
} from '../../store/actions'

import { msToTime } from '../Utils/Number'
import Loading from '../Loading/Loading';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 1900px) 1fr;
  padding: 15px;
  height: 100%;
  overflow-y: scroll;
`

const Container = styled.div`
  grid-column: 2;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 100px;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, 200px);
    grid-auto-rows: 200px;
  }
`

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items; stretch;
  border-radius: 4px;
  overflow: hidden;  
`

const Artwork = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  width: 100px;
  height: 100px;
  align-self: center;
  border-radius: 4px;
  
  > img {
    display: none;
  }

  @media screen and (min-width: 500px) {
    position: absolute;
    cursor: pointer;
    top: 0px;
    left: 0px;
    height: 80%;
    width: 100%;

    > img {
      transition: transform 200ms ease-in;
      transform: scale(0);
      margin: 50px auto;
      display: block;
      width: 100%;
      z-index: 1;
    }
    
    &:hover {
      > img {
        transform: scale(1);
      }
    }
  }
`

const Info = styled.div`
  position: relative;
  font-size: .8rem;
  color: #444444;
  padding: 5px 10px;
  flex: 1;
  overflow: hidden;

  > div {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 5px 10px;
    width: 100%;
    color: #dedede;
  }

  @media screen and (min-width: 500px) {
    color: #444;
    background-color: white;
    font-weight: 400;
    font-size: .8rem;
    position: absolute;
    cursor: pointer;
    bottom: 0px;
    left: 0px;
    height: 25%;
    width: 100%;
       
    > a {
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`

class SongCard  extends React.Component {

  handleClick = () => {
    const {
      stream,
      index
    } = this.props.song

    this.props.play(index, stream)
  }

  render () {
    
    const {
      title,
      artwork,
      duration,
    } = this.props.song
    
    return (
      <Card onClick={this.handleClick}>
        
        <Artwork style={{backgroundImage: `url(${artwork.replace("large", "t300x300")})`}}>
          <Icon src={Play} size={50} />
        </Artwork>
        
        <Info>
          <a>{title}</a>
          <div>
            <Icon src={Add} size={12} title="Add to Playlist"/>
            <span>{msToTime(duration)}</span>
          </div>
        </Info>
      
      </Card>
    )  
  }
}

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
          { loadingPlaylist && <Loading/>}
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