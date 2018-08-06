import { h, Component } from "preact"
import { connect } from "preact-redux"
import styled from "styled-components"

import Drawer from "./drawer"

class Aside extends Component {
  open = false
  startX = 0
  startY = 0
  backdrop = 0
  translation = 0

  componentDidUpdate(prevProps) {
    if (prevProps.sidebarVisible !== this.props.sidebarVisible) {
      this.toggleDrawer()
    }
  }

  handleTouchEnd = () => {
    this.translation = this.translation < -50 ? -100 : 0
    this.drawer.style.transition = "transform 100ms ease-in-out"
    this.drawer.style.transform = `translate(${this.translation}%, 0)`
    if (this.translation === -100) {
      this.overlay.style.backgroundColor = `rgba(0,0,0,0)`
      this.overlay.style.width = "20px"
      this.open = false
      return
    }
    this.open = true
  }

  handleTouchStart = event => {
    const { clientX, clientY } = event.targetTouches[0]
    this.startX = clientX
    this.startY = clientY
    this.drawer.style.transition = ""
  }

  handleTouchMove = event => {
    const { clientX, clientY } = event.targetTouches[0]
    const diffX = Math.abs(clientX - this.startX)
    const diffY = Math.abs(clientY - this.startY)

    if (diffX > diffY) {
      const proportion = clientX / window.innerWidth
      this.translation = Math.min(-(1 - proportion) * 100, 0)
      this.backdrop = Math.min(proportion, 0.5)

      this.overlay.style.width = "100%"
      this.drawer.style.transform = `translateX(${this.translation}%)`
      this.overlay.style.backgroundColor = `rgba(0,0,0,${this.backdrop})`
    }
  }

  handleDrawer = node => {
    this.drawer = node
  }

  handleOverlay = node => {
    this.overlay = node
  }

  toggleDrawer = e => {
    this.drawer.style.transition = "transform 200ms"

    if (this.open) {
      this.drawer.style.transform = "translateX(-100%)"
      this.overlay.style.backgroundColor = "rgba(0,0,0,0)"
      this.overlay.style.width = "20px"
      this.open = false
    } else {
      this.drawer.style.transform = "translateX(0)"
      this.overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
      this.overlay.style.width = "100%"
      this.open = true
    }
  }

  render() {
    const config = {
      onTouchStart: this.handleTouchStart,
      onTouchMove: this.handleTouchMove,
      onTouchEnd: this.handleTouchEnd
    }

    return (
      <aside>
        <Drawer InnerProps={{ innerRef: this.handleDrawer, ...config }} />
        <Overlay
          onClick={this.toggleDrawer}
          innerRef={this.handleOverlay}
          {...config}
        />
      </aside>
    )
  }
}

const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 100%;
  z-index: 50;
  display: var(--overlay);
`

const state = ({ root: { sidebarVisible } }) => ({
  sidebarVisible
})

export default connect(state)(Aside)
