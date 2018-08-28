import { h, Component } from "preact"
import { connect } from "preact-redux"
import styled from "styled-components"
// import throttle from "lodash.throttle"

import PlayerControls from "./PlayerControls"
import VolumeControl from "./VolumeControl"

import {
  play_prev,
  play_next,
  on_play,
  on_pause,
  loaded_metadata,
  toggle_mute,
  toggle_loop,
  on_load_start
} from "@/actions"
import TimerRange from "./TimerRange"

const Wrapper = styled.div`
  padding-left: var(--sidebarSpace);
  background: var(--primary);
  backface-visibility: hidden;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  display: flex;
  transform: ${props => (props.visible ? "translateY(0)" : "translateY(100%)")};
  transition: transform 500ms ease-in-out;
  z-index: 10;

  &::after {
    box-shadow: inset 0px -4px 8px -3px rgba(17, 17, 17, 0.06);
    position: absolute;
    top: -5px;
    right: 0px;
    width: 100%;
    height: 5px;
    content: "";
  }
`

class Player extends Component {
  buffer = 0

  componentDidMount() {
    const { playNext, playPrev } = this.props
    if ("mediaSession" in navigator) {
      navigator.mediaSession.playbackState = "paused"
      navigator.mediaSession.setActionHandler("previoustrack", playPrev)
      navigator.mediaSession.setActionHandler("play", this.togglePlay)
      navigator.mediaSession.setActionHandler("pause", this.togglePlay)
      navigator.mediaSession.setActionHandler("nexttrack", playNext)
    } else {
      window.addEventListener("keyup", this.keyboardKey, false)
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.keyboardKey, false)
  }

  componentWillReceiveProps(nextProps) {
    if ("mediaSession" in navigator) {
      const { title, user, artworkOriginal } = nextProps.song
      /* eslint-disable */
      navigator.mediaSession.metadata = new MediaMetadata({
        title: title,
        artist: user,
        artwork: [
          {
            src: artworkOriginal.replace("large", "t500x500"),
            sizes: "500x500",
            type: "image/jpg"
          }
        ]
      })
      /* eslint-enable */
    }
  }

  keyboardKey = ({ code }) => {
    const { playPrev, playNext } = this.props
    if (code === "MediaPlayPause") this.togglePlay()
    else if (code === "MediaTrackNext") playNext()
    else if (code === "MediaTrackPrevious") playPrev()
    else return
  }

  onLoadedMetadata = () => {
    this.props.loadedMetadata()
    this.audio.play()
  }

  onTimeUpdate = () => {
    const value = (100 / this.audio.duration) * this.audio.currentTime
    this.timer.style.backgroundSize = `${value}%, ${this.buffer}%`
    this.timer.value = value || 0
  }

  onProgress = ({ target: { buffered, duration } }) => {
    if (duration > 0 && buffered.length) {
      this.buffer = (buffered.end(buffered.length - 1) / duration) * 100
    }
  }

  togglePlay = () => {
    if (this.audio.paused) {
      this.audio.play()
    } else {
      this.audio.pause()
    }
  }

  toggleMute = () => {
    const mute = !this.audio.muted
    this.props.toggleMute(mute)
    this.audio.muted = mute
  }

  toggleLoop = () => {
    const loop = !this.audio.loop
    this.props.toggleLoop(loop)
    this.audio.loop = loop
  }

  timerChange = () => {
    if (this.props.audioUrl) {
      const time = this.audio.duration * (this.timer.value / 100)
      this.audio.currentTime = time
    }
  }

  volumeChange = () => {
    const volume = this.volume.value
    this.volume.style.backgroundSize = `${volume * 100}%`
    this.audio.volume = volume
  }

  onMouseDown = () => {
    this.audio.pause()
  }

  onMouseUP = () => {
    if (this.props.audioUrl) {
      this.audio.play()
    }
  }

  audioRef = node => {
    this.audio = node
  }

  timerRef = node => {
    this.timer = node
  }

  volumeRef = node => {
    this.volume = node
  }

  render({ audioUrl, playNext, onPause, onPlay, onLoadStart, song }) {
    return (
      <Wrapper visible={audioUrl !== null}>
        <PlayerControls toggle={this.togglePlay} toggleLoop={this.toggleLoop} />

        <TimerRange
          title={song ? song.title : "Title"}
          duration={song ? song.duration : "00:00"}
          innerRef={this.timerRef}
          onChange={this.timerChange}
          onTouchStart={this.onMouseDown}
          onTouchEnd={this.onMouseUP}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUP}
        />

        <VolumeControl
          innerRef={this.volumeRef}
          onChange={this.volumeChange}
          toggleMute={this.toggleMute}
        />

        <audio
          crossOrigin="anonymous"
          onProgress={this.onProgress}
          onTimeUpdate={this.onTimeUpdate}
          onLoadedMetadata={this.onLoadedMetadata}
          onLoadStart={onLoadStart}
          onEnded={playNext}
          onPause={onPause}
          onPlay={onPlay}
          src={audioUrl}
          ref={this.audioRef}
        />
      </Wrapper>
    )
  }
}

const state = ({ player: { song, audioUrl } }) => ({
  audioUrl,
  song
})

const actions = {
  onPlay: on_play,
  onPause: on_pause,
  playPrev: play_prev,
  playNext: play_next,
  onLoadStart: on_load_start,
  loadedMetadata: loaded_metadata,
  toggleMute: toggle_mute,
  toggleLoop: toggle_loop
}

export default connect(
  state,
  actions
)(Player)
