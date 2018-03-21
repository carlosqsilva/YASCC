import { h, Component } from "preact"
import styled from "styled-components"
import Route from "react-router-dom/es/Route"
import HashRouter from "react-router-dom/es/HashRouter"
import { connect } from "react-redux"

import { Header, Sidebar, Player } from "./Components"
import Home from "./Routes/Home"
import Search from "./Routes/Search"
import Playlist from "./Routes/Playlist"

import { load_playlist, is_online, is_offline } from "./store/actions"

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  max-width: 100%;
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
    this.props.loadPlaylist().then(() => {
      const ele = document.getElementById("loader")
      if (ele) {
        setTimeout(() => {
          ele.classList.add("ready")
          setTimeout(() => {
            ele.outerHTML = ""
          }, 600)
        }, 1000)
      }
    })

    window.addEventListener("online", this.props.isOnline)
    window.addEventListener("offline", this.props.isOffline)
  }

  render() {
    return (
      <HashRouter>
        <Container>
          <Sidebar />
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/playlist" component={Playlist} />
          <Header />
          <Player />
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
