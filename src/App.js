import { h } from "preact"
import styled, { ThemeProvider } from "styled-components"
import Route from "react-router-dom/es/Route"
import BrowserRouter from "react-router-dom/es/BrowserRouter"
import { connect } from "preact-redux"

import { Header, Sidebar, Player, lightTheme, darkTheme } from "./Components"

import Home from "./Routes/Home"
import Search from "./Routes/Search"
import Playlist from "./Routes/Playlist"

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  margin-top: 50px;
  padding: 10px;
  background: linear-gradient(to right bottom, #ece9e6, #fff);
  transition: all 250ms ease;

  @media screen and (min-width: 500px) {
    margin-left: 220px;
    padding: 15px;
  }
`

const app = ({ darkMode }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Sidebar />
          <Header />
          <Player />
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/playlist" component={Playlist} />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

const state = ({ root: { darkMode } }) => ({
  darkMode
})

export default connect(state)(app)
