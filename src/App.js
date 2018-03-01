import { h, Component } from "preact"
import styled from "styled-components"
import { connect } from "react-redux"
import { Header, Sidebar, Player } from "./Components"

import SongList from "./Routes/SongList"
import Search from "./Routes/Search"
import UserPlaylist from "./Routes/UserPlaylist"

import HashRouter from "react-router-dom/es/HashRouter"
import Route from "react-router-dom/es/Route"

import { load_playlist } from "./store/actions"

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
    this.props.loadPlaylist()

    const ele = document.getElementById("loader")
    if (ele) {
      setTimeout(() => {
        ele.classList.add("ready")
        setTimeout(() => {
          ele.outerHTML = ""
        }, 1000)
      }, 1500)
    }
  }

  render() {
    return (
      <HashRouter>
        <Container>
          <Sidebar />
          <Route exact path="/" component={SongList} />
          <Route path="/search" component={Search} />
          <Route path="/playlist" component={UserPlaylist} />
          <Header />
          <Player />
        </Container>
      </HashRouter>
    )
  }
}

const actions = {
  loadPlaylist: load_playlist
}

export default connect(null, actions)(App)
