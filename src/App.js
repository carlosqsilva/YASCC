import React, { Component } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { Header, Sidebar, Player, SongList } from './components';
import {
  toggle_sidebar,
  hide_sidebar,
  on_load_start,
  on_loaded_metadata,
  on_time_update,
  on_play,
  on_pause,
  play_next,
  play_prev,
  play_song,
  load_playlist
} from './store/actions'

const Fragment = React.Fragment

const Root = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  overflow: hidden;
`

const Container = styled.div`
  background-color: rgba(250, 250, 250, 1);
  position: relative;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 60px;
  transition: all 250ms ease;
`

const Overlay = styled.div`
  display: none;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0,0,0,.5);
  transition: all 250ms ease;
`

class App extends Component {

  componentDidMount() {
    this.props.loadPlaylist()
    
    window.addEventListener("resize", debounce(() => {
      if(window.innerWidth < 600) {
        if(!this.props.sidebarVisible) {
          this.props.hideSidebar()
        }
      }
    }, 500, {'maxWait': 1000}))
  }

  onLoadedMetadata = () => {
    const { onLoadedMetadata } = this.props
    onLoadedMetadata(Math.floor(this.audioElement.duration))
  }

  onTimeUpdate = () => {
    const { onTimeUpdate } = this.props
    onTimeUpdate(Math.floor(this.audioElement.currentTime))
  }

  togglePlay = () => {
    const { audioElement } = this
    if (audioElement.paused) {
      audioElement.play()
    } else {
      audioElement.pause()
    }
  }

  render() {
    const { sidebarVisible, audioUrl } =this.props.state
    const {
      playNextSong,
      onLoadStart,
      onPause,
      onPlay
    } = this.props

    return (
      <Fragment>
        <Root>
          <Sidebar style={ !sidebarVisible ? {transform: "translateX(-100%)"} : {}} />          
          <Overlay 
            style={ (window.innerWidth < 600 && sidebarVisible) ? {display: "block"} : {} }
            onClick={this.props.toggleSidebar} />          
          <Player togglePlay={this.togglePlay} />    

          <Container 
            style={ (window.innerWidth >= 600 && sidebarVisible) ? {marginLeft: 250} : {}} >            
            <Header />
            <SongList />
          </Container>

        </Root>
        <audio 
          id="player"
          crossOrigin="anonymous"
          src={audioUrl}
          onEnded={playNextSong}
          onLoadedMetadata={this.onLoadedMetadata}
          onLoadStart={onLoadStart}
          onPause={onPause}
          onPlay={onPlay}
          onTimeUpdate={this.onTimeUpdate}
          ref={element => this.audioElement = element}
          />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideSidebar: () => dispatch(hide_sidebar()),
    toggleSidebar: () => dispatch(toggle_sidebar()),
    loadPlaylist: () => dispatch(load_playlist()),
    onLoadedMetadata: (duration) => dispatch(on_loaded_metadata(duration)),
    onTimeUpdate: (currentTime) => dispatch(on_time_update(currentTime)),
    playNextSong: () => dispatch(play_next()),
    onLoadStart: () => dispatch(on_load_start()),
    onPause: () => dispatch(on_pause()),
    onPlay: () => dispatch(on_play())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
