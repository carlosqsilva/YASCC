import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import Item from '../Utils/Item'
import Icon from '../Utils/Icon'

import {
  play_next,
  play_prev,
  on_load_start,
  on_play,
  on_pause
} from '../../store/actions'

import play from './play.svg'
import back from './back.svg'
import next from './next.svg'
import pause from './pause.svg'

const Fragment = React.Fragment

const Wrapper = styled.div`
  background-color: white;
  height: 40px;
  padding-top: 4px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: flex-start;
  transform: translateY(100%);
  transition: transform 200ms ease-in-out;
`

const Controls = styled.div`
  display: flex;
  justify-content: center;
`

const Song = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`

const Info = styled.div`
  overflow: hidden;
  padding: 5px 0;
  flex: 1;

  > a {
    color: #444;
    overflow: hidden;
    display: block;
    text-decoration: none;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .6rem;

    &:first-child {
      font-size: .75rem;
    }
  }
`

const SliderDuration = styled.div`
  background-color: rgba(0,0,0,.03);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 4px;
`

const SliderFill = styled.div`
  background-color: #21D4FD;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  height: 4px;
  will-change: width;
`

class Player extends React.Component {
  state = {
    duration: 0,
    currentTime: 0,
  }

  onLoadedMetadata = () => {
    this.setState({
      duration: this.audioElement.duration
    })
    this.audioElement.play()
  }

  onTimeUpdate = () => {
    this.setState({
      currentTime: this.audioElement.currentTime
    })
  }

  togglePlay = () => {
    const { audioElement } = this
    if (audioElement.paused) {
      audioElement.play()
    } else {
      audioElement.pause()
    }
  }

  render(){

    const {
      currentSong,
      isPlaying,
      audioUrl
    } = this.props.state

    const {
      currentTime,
      duration
    } = this.state
    
    const {
      playNext,
      playPrev,
      onLoadStart,
      onPause,
      onPlay
    } = this.props
    
    const width = `${( currentTime/ duration) * 100}%`

    return (
      <Fragment>

        <Wrapper style={ currentSong ? {transform: "translateY(0)"} : {}}>
          
          <Controls>
            <Item link noMobile onClick={playPrev} ><Icon src={back} size={20} /></Item>
            <Item link onClick={this.togglePlay}><Icon src={isPlaying ? pause : play} size={20} /></Item>
            <Item link noMobile onClick={playNext} ><Icon src={next} size={20} /></Item>
          </Controls>
          
            <Song>
              <Info>
                <a>{currentSong &&currentSong.title}</a>
                <a>{currentSong && currentSong.user}</a>
              </Info>
            </Song>
            
            <SliderDuration>
            <SliderFill style={{ width }}/>
          </SliderDuration>
        
        </Wrapper>
       
        <audio 
          crossOrigin="anonymous"
          src={audioUrl}
          onEnded={playNext}
          onLoadedMetadata={this.onLoadedMetadata}
          onLoadStart={onLoadStart}
          onPause={onPause}
          onPlay={onPlay}
          onTimeUpdate={debounce(this.onTimeUpdate, 500, {maxWait: 1000})}
          ref={element => this.audioElement = element}/>

      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  state: state.playlist
})

const mapDispatchToProps = dispatch => ({
  playNext: () => dispatch(play_next()),
  playPrev: () => dispatch(play_prev()),
  onLoadStart: () => dispatch(on_load_start()),
  onPause: () => dispatch(on_pause()),
  onPlay: () => dispatch(on_play())
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)