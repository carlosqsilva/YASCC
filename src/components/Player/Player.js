import { h, Component } from "preact"
import { connect } from "react-redux"
import styled from "styled-components"
import debounce from "lodash.debounce"
import Item from "../Utils/Item"
import Icon from "../Utils/Icon"

import { play_next, play_prev, on_play, on_pause } from "../../store/actions"

import play from "./play.svg"
import back from "./back.svg"
import next from "./next.svg"
import pause from "./pause.svg"

const Wrapper = styled.div`
  background-color: white;
  height: 40px;
  padding-top: 4px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: flex-start;
  transform: translateX(-100%);
  transition: transform 500ms ease;

  @media screen and (min-width: 500px) {
    padding-left: 250px;
  }
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
    font-size: 0.7rem;

    &:first-child {
      font-size: 0.8rem;
    }
  }
`

const SliderDuration = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 4px;

  @media screen and (min-width: 500px) {
    padding-left: 250px;
  }
`

const SliderFill = styled.div`
  background-color: #21d4fd;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  height: 4px;
  width: 100%;
  transform: translateX(-100%);
`

class Player extends Component {
  state = {
    duration: 0,
    currentTime: 0
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

  render(
    { playlist, playNext, playPrev, onPause, onPlay },
    { currentTime, duration }
  ) {
    const { currentSong, isPlaying, audioUrl } = playlist
    const transform = `translateX(-${100 - currentTime / duration * 100}%)`

    return (
      <Wrapper style={currentSong ? { transform: "translateX(0)" } : {}}>
        <Controls>
          <Item link noMobile onClick={playPrev}>
            <Icon src={back} size={25} />
          </Item>
          <Item link onClick={this.togglePlay}>
            <Icon src={isPlaying ? pause : play} size={25} />
          </Item>
          <Item link noMobile onClick={playNext}>
            <Icon src={next} size={25} />
          </Item>
        </Controls>

        <Song>
          <Info>
            <a>{currentSong && currentSong.title}</a>
            <a>{currentSong && currentSong.user}</a>
          </Info>
        </Song>

        <SliderDuration>
          <SliderFill style={{ transform }} />
        </SliderDuration>
        <audio
          crossOrigin="anonymous"
          src={audioUrl}
          onEnded={playNext}
          onLoadedMetadata={this.onLoadedMetadata}
          onPause={onPause}
          onPlay={onPlay}
          onTimeUpdate={debounce(this.onTimeUpdate, 500, { maxWait: 1000 })}
          ref={element => (this.audioElement = element)}
        />
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ playlist }) => ({
  playlist
})

const mapDispatchToProps = {
  playNext: play_next,
  playPrev: play_prev,
  onPause: on_pause,
  onPlay: on_play
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
