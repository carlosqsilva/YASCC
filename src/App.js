import { h } from "preact"
import styled from "styled-components"
import Route from "react-router-dom/es/Route"
import BrowserRouter from "react-router-dom/es/BrowserRouter"

import { Header, Sidebar, Player } from "./Components"

import Home from "./Routes/Home"
import Recent from "./Routes/Recent"
import Search from "./Routes/Search"
import Playlist from "./Routes/Playlist"

const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  padding-top: 50px;
  overflow: hidden;
  background: linear-gradient(to right bottom, var(--light2), var(--primary));
  transition: all 250ms ease;
  margin-left: var(--sidebarSpace);
`

const app = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Container>
        <Sidebar />
        <Header />
        <Player />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/recent" component={Recent} />
        <Route path="/playlist" component={Playlist} />
      </Container>
    </BrowserRouter>
  )
}

export default app
