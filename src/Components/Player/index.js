import { h, Component, createRef } from "preact";
import { connect } from "react-redux";
import styled from "styled-components";

import PlayerControls from "./PlayerControls";
import VolumeControl from "./VolumeControl";

import {
  play_prev,
  play_next,
  on_play,
  on_pause,
  loaded_metadata,
  toggle_mute,
  toggle_loop,
  on_load_start
} from "@/actions";
import TimerRange from "./TimerRange";

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
`;

class Player extends Component {
  timerRef = createRef();
  volumeRef = createRef();
  audioRef = createRef();
  buffer = 0;

  componentDidMount() {
    const { playNext, playPrev } = this.props;
    if ("mediaSession" in navigator) {
      navigator.mediaSession.playbackState = "paused";
      navigator.mediaSession.setActionHandler("previoustrack", playPrev);
      navigator.mediaSession.setActionHandler("play", this.togglePlay);
      navigator.mediaSession.setActionHandler("pause", this.togglePlay);
      navigator.mediaSession.setActionHandler("nexttrack", playNext);
    } else {
      window.addEventListener("keyup", this.keyboardKey, false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.keyboardKey, false);
  }

  componentWillReceiveProps(nextProps) {
    if ("mediaSession" in navigator) {
      const { title, user, artworkOriginal } = nextProps.song;
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
      });
      /* eslint-enable */
    }
  }

  keyboardKey = ({ code }) => {
    const { playPrev, playNext } = this.props;
    if (code === "MediaPlayPause") this.togglePlay();
    else if (code === "MediaTrackNext") playNext();
    else if (code === "MediaTrackPrevious") playPrev();
    else return;
  };

  onLoadedMetadata = () => {
    if (this.audioRef.current !== undefined) {
      this.props.loadedMetadata();
      this.audio.play();
    }
  };

  toPercentage = (current, total) => (current / total) * 100;

  onTimeUpdate = () =>
    window.requestAnimationFrame(() => {
      const value = this.toPercentage(
        this.audioRef.current.currentTime,
        this.audioRef.current.duration
      );

      if (!this.buffer) this.onProgress();

      if (this.timerRef.current !== undefined) {
        console.log(this.timerRef.current);
        this.timerRef.current.style.backgroundSize = `${value}%, ${this.buffer}%`;
        this.timerRef.current.value = value || 0;
      }
    });

  onLoadStart = () => {
    this.buffer = 0;
    this.props.onLoadStart();
  };

  onProgress = () => {
    if (
      this.audioRef.current.duration > 0 &&
      this.audioRef.current.buffered.length
    ) {
      this.buffer = this.toPercentage(
        this.audioRef.current.buffered.end(
          this.audioRef.current.buffered.length - 1
        ),
        this.audioRef.current.duration
      );
    }
  };

  togglePlay = () => {
    if (this.audioRef.current.paused) {
      this.audioRef.current.play();
    } else {
      this.audioRef.current.pause();
    }
  };

  toggleMute = () => {
    const mute = !this.audioRef.current.muted;
    this.props.toggleMute(mute);
    this.audioRef.current.muted = mute;
  };

  toggleLoop = () => {
    const loop = !this.audio.loop;
    this.props.toggleLoop(loop);
    this.audioRef.current.loop = loop;
  };

  timerChange = () => {
    if (this.props.audioUrl && this.timerRef.current) {
      const time = this.audio.duration * (this.timerRef.current.value / 100);
      this.audioRef.current.currentTime = time;
    }
  };

  volumeChange = () => {
    if (this.volumeRef.current) {
      const volume = this.volumeRef.current.value;
      this.volumeRef.current.style.backgroundSize = `${volume * 100}%`;
      this.audioRef.current.volume = volume;
    }
  };

  onMouseDown = () => {
    if (this.audioRef.current) this.audioRef.current.pause();
  };

  onMouseUP = () => {
    if (this.props.audioUrl) {
      this.audioRef.current.play();
    }
  };

  render({ audioUrl, playNext, onPause, onPlay, song }) {
    return (
      <Wrapper visible={audioUrl !== null}>
        <PlayerControls toggle={this.togglePlay} toggleLoop={this.toggleLoop} />

        <TimerRange
          title={song ? song.title : "Title"}
          duration={song ? song.duration : "00:00"}
          ref={this.timerRef}
          onChange={this.timerChange}
          onTouchStart={this.onMouseDown}
          onTouchEnd={this.onMouseUP}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUP}
        />

        <VolumeControl
          ref={this.volumeRef}
          onChange={this.volumeChange}
          toggleMute={this.toggleMute}
        />

        <audio
          crossOrigin="anonymous"
          onProgress={this.onProgress}
          onTimeUpdate={this.onTimeUpdate}
          onLoadedMetadata={this.onLoadedMetadata}
          onLoadStart={this.onLoadStart}
          onEnded={playNext}
          onPause={onPause}
          onPlay={onPlay}
          src={audioUrl}
          ref={this.audioRef}
        />
      </Wrapper>
    );
  }
}

const state = ({ player: { song, audioUrl } }) => ({
  audioUrl,
  song
});

const actions = {
  onPlay: on_play,
  onPause: on_pause,
  playPrev: play_prev,
  playNext: play_next,
  onLoadStart: on_load_start,
  loadedMetadata: loaded_metadata,
  toggleMute: toggle_mute,
  toggleLoop: toggle_loop
};

export default connect(state, actions)(Player);
