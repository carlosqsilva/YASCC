import { h, Component } from "preact"
import styled from "styled-components"

const SliderDuration = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 6px;
`

const SliderFill = styled.div`
  background-color: #21d4fd;
  border-radius: 0 3px 3px 0;
  height: 6px;
  width: 100%;
  transform: translateX(-100%);
  /* will-change: width; */
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

  render({ currentTime, duration }) {
    const transform = `translateX(-${100 - currentTime / duration * 100}%)`
    return (
      <SliderDuration onClick={this.onClick}>
        <SliderFill style={{ transform }} />
      </SliderDuration>
    )
  }
}

export default Slider
