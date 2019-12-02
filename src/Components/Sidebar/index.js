import { h, Component } from "preact";
import { connect } from "react-redux";
import styled from "styled-components";

import Drawer from "./drawer";

class Aside extends Component {
  startX = 0;
  diffX = 0;

  state = {
    open: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.sidebarVisible !== this.props.sidebarVisible) {
      this.toggleDrawer();
    }
  }

  handleTouchEnd = () => {
    if (this.diffX > window.innerWidth * 0.3) {
      this.toggleDrawer();
      this.diffX = 0;
    }
  };

  handleTouchStart = event => {
    this.startX = event.targetTouches[0].clientX;
  };

  handleTouchMove = event => {
    this.diffX = Math.abs(event.targetTouches[0].clientX - this.startX);
  };

  toggleDrawer = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const config = {
      onTouchStart: this.handleTouchStart,
      onTouchMove: this.handleTouchMove,
      onTouchEnd: this.handleTouchEnd,
      className: this.state.open ? "active" : ""
    };

    return (
      <aside>
        <Drawer config={config} />
        <Overlay onClick={this.toggleDrawer} {...config} />
      </aside>
    );
  }
}

const Overlay = styled.div`
  transition: background-color 300ms ease;
  display: var(--overlay);
  position: fixed;
  height: 100%;
  width: 20px;
  z-index: 5;
  left: 0px;
  top: 0px;

  &.active {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
    width: 100%;
  }
`;

const state = ({ root: { sidebarVisible } }) => ({
  sidebarVisible
});

export default connect(state)(Aside);
