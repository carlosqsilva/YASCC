import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Icon from '../Utils/Icon'
import Play from './play.svg'

import {
  load_playlist_next
} from '../../store/actions'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 1900px) 1fr;
  padding: 10px;
  height: 100%;
  overflow-y: scroll;
`

const Container = styled.div`
  grid-column: 2;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 100px;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-auto-rows: 200px;
  }
`

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items; stretch;
  
`

const Artwork = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  align-self: center;

  > img {
    opacity: 0;
    transition: all 150ms ease-in;
  }

  @media screen and (min-width: 500px) {
    position: absolute;
    cursor: pointer;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;

    &:hover {
      > img {
        opacity: 1;
        transform: scale(1);
      }
    }

    > img {
      transform: scale(0);
      z-index: 1;
    }
  }
`

const Info = styled.div`
  position: relative;
  font-size: .9rem;
  color: #444444;
  padding: 5px;
  pointer-events: none;
  flex: 1;

  > span {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #dedede;
  }

  > div {
    position: absolute;
    display: flex;
    justify-content: space-between;
    bottom: 5px;
    left: 10px;
    width: 50px;
  }

  @media screen and (min-width: 500px) {
    color: rgba(255, 255, 255, .9);
    background-color: rgba(0, 0, 0, .5);
    font-weight: 700;
    font-size: 1rem;
    position: absolute;
    cursor: pointer;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
  }
`


const SongCard = (props) => {

  const {
    title,
    artwork,
    duration
  } = props.song

  return (
    <Card onClick={() => console.log("ahoy")}>
      
      <Artwork src={artwork} alt="">
        <Icon src={Play} size={50} />
      </Artwork>
      
      <Info>
        <a>{title}</a>
        <span>{duration}</span>
        <div>
          <Icon size={15} alt="Add to Playlist"/>
          <Icon size={15} />
        </div>
      </Info>
    
    </Card>
  )  
}

class SongList extends React.Component {

  handleScroll = (e) => {
    const {scrollTop, scrollHeight, offsetHeight } = e.target
    if ((scrollTop + offsetHeight) > (scrollHeight - 50)) {
      this.props.loadNextSongs()
    }
  }

  render () {
    const {
      playlist
    } = this.props.state

    return (
      <Wrapper onScroll={this.handleScroll}>
        <Container>
          {
            playlist.map( (song, index) => <SongCard song={song} key={index}/>)
          }
        </Container>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  loadNextSongs: () => dispatch(load_playlist_next())
})

export default connect(mapStateToProps, mapDispatchToProps)(SongList)