import React, { Component } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { Header, Sidebar, Player, SongList, Search } from './components';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import {
  toggle_sidebar,
  hide_sidebar,
  load_playlist,
} from './store/actions'

const Fragment = React.Fragment

const Container = styled.div`
  background-color: rgba(250, 250, 250, 1);
  position: relative;
  height: 100%;
  padding-top: 50px;
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

  handleResize = () => {
    if(window.innerWidth < 600) {
      if(!this.props.sidebarVisible) {
        this.props.hideSidebar()
      }
    }
  }

  componentDidMount() {
    this.props.loadPlaylist()    
    window.addEventListener("resize", debounce(this.handleResize, 500, {'maxWait': 1000}), false)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", debounce(this.handleResize, 500, {'maxWait': 1000}), false)
  }

  render() {
    const {sidebarVisible} =this.props.state

    return (
      <Router>
        <Fragment>
          <Sidebar style={ !sidebarVisible ? {transform: "translateX(-100%)"} : {}} />          
          <Overlay 
            style={ (window.innerWidth < 600 && sidebarVisible) ? {display: "block"} : {} }
            onClick={this.props.toggleSidebar} />          

            <Container 
              style={ (window.innerWidth >= 600 && sidebarVisible) ? {marginLeft: 250} : {}} >      
                <Header />
                  <Route exact path="/" component={SongList} /> 
                  <Route path="/search" component={Search} /> 
              <Player/>
            </Container>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.root
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideSidebar: () => dispatch(hide_sidebar()),
    toggleSidebar: () => dispatch(toggle_sidebar()),
    loadPlaylist: () => dispatch(load_playlist()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
