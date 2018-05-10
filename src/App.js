import { h, Component } from "preact"
import styled from "styled-components"
import Route from "react-router-dom/es/Route"
import HashRouter from "react-router-dom/es/HashRouter"
import { connect } from "preact-redux"

import { Header, Sidebar, Player } from "./Components"

import Home from "./Routes/Home"
import Search from "./Routes/Search"
import Playlist from "./Routes/Playlist"

import { load_playlist, is_online, is_offline } from "./store/actions"

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  margin-top: 50px;
  padding: 10px;
  transition: all 250ms ease;

  @media screen and (min-width: 500px) {
    margin-left: 220px;
    padding: 15px;
  }
`

class App extends Component {
  componentDidMount() {
    this.props.loadPlaylist()
    window.addEventListener("online", this.props.isOnline)
    window.addEventListener("offline", this.props.isOffline)
  }

  render() {
    return (
      <HashRouter>
        <Container>
          <Sidebar />
          <Header />
          <Player />
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/playlist" component={Playlist} />
        </Container>
      </HashRouter>
    )
  }
}

const actions = {
  loadPlaylist: load_playlist,
  isOnline: is_online,
  isOffline: is_offline
}

export default connect(null, actions)(App)
