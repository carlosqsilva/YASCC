import { h, Component } from "preact"
import Redirect from "react-router-dom/es/Redirect"
import styled from "styled-components"
import Loading from "../Components/Loading"
import { SongCard, CardContainer } from "../Components/SongCard"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  transform: translateZ(0);

  @media screen and (min-width: 500px) {
    padding: 15px;
  }
`

export const WithActions = ({ InnerComponent, infinite, fromPlaylist }) => {
  const Card = SongCard(fromPlaylist)
  return class OuterComponent extends Component {
    componentDidMount() {
      const { onMounted, ready } = this.props
      if (onMounted && ready) {
        onMounted()
      }
    }

    playSong = index => () => {
      this.props.playSong(index, this.props.location.pathname)
    }

    playlistAction = song => e => {
      if (!e) e = window.event
      if (e.stopPropagation) e.stopPropagation()
      this.props.playlistAction(song)
    }

    render({ loadMore, playlist, loading, active, ready, location }) {
      if (location.pathname !== "/" && !ready) {
        return <Redirect to="/" />
      }

      return (
        <Wrapper>
          {InnerComponent && <InnerComponent />}
          <CardContainer>
            {playlist.map((song, index) => (
              <Card
                song={song}
                active={active === song.id}
                playlistAction={this.playlistAction(song)}
                play={this.playSong(index)}
                key={song.id}
              />
            ))}
          </CardContainer>
          {infinite && <Loading isLoading={loading} loadMore={loadMore} />}
        </Wrapper>
      )
    }
  }
}
