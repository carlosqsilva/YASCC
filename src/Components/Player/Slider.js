import { h, Component } from "preact"
import { connect } from "preact-redux"
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  position: relative;
  background-image: url(${props => props.image});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  position: relative;
  cursor: pointer;
  overflow: hidden;
`

const SliderFill = styled.div`
  transform: translateX(-100%);
  will-change: transform;
  background-color: var(--info);
  position: absolute;
  bottom: 0px;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: -10;
`

const Text = styled.p`
  color: var(--lightDark);
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:last-child {
    font-size: 0.9rem;
  }
`

const offsetLeft = element => {
  let el = element
  let x = el.offsetLeft

  while (el.offsetParent) {
    x += el.offsetParent.offsetLeft
    el = el.offsetParent
  }

  return x
}

class Slider extends Component {
  onClick = e => {
    const { duration, onChange } = this.props
    const percent =
      (e.clientX - offsetLeft(e.currentTarget)) / e.currentTarget.offsetWidth
    onChange(percent * duration)
  }

  render({ time, duration, song }) {
    const transform = `translateX(-${100 - (time / duration) * 100}%)`
    return (
      <Container onClick={this.onClick} image={song.waveform}>
        <SliderFill style={{ transform }} />
        <Text>{song.title}</Text>
        <Text>{song.user}</Text>
      </Container>
    )
  }
}

const state = ({ player: { song, time, duration } }) => ({
  song,
  time,
  duration
})

export default connect(state)(Slider)
