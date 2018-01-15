import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Header, Sidebar, Player, SongList, Search, UserPlaylist } from './components';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import {
  load_playlist,
} from './store/actions'

const Fragment = React.Fragment

const Container = styled.div`
  background-color: rgba(250, 250, 250, 1);
  position: relative;
  min-height: 100vh;
  padding-top: 50px;
  transition: all 250ms ease;

  @media screen and (min-width: 500px) {
    margin-left: 250px;
  }
`

class App extends Component {

  componentDidMount() {
    this.props.loadPlaylist()

    const ele = document.getElementById("loader")
    if (ele) {
      setTimeout( () => {
        ele.classList.add("ready")
        setTimeout( () => {
          ele.outerHTML = ''
        }, 100)
      }, 2000)
    }
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Sidebar/>          
          <Container>      
            <Route exact path="/" component={SongList} /> 
            <Route path="/search" component={Search} />
            <Route path="/playlist" component={UserPlaylist} />
          </Container>
          <Header/>
          <Player/>
        </Fragment>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPlaylist: () => dispatch(load_playlist()),
  }
}

export default connect(null, mapDispatchToProps)(App);
