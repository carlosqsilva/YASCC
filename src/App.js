import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Header, Sidebar, Player, SongList, Search } from './components';

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
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Sidebar/>          
          <Container>      
            <Route exact path="/" component={SongList} /> 
            <Route path="/search" component={Search} /> 
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
