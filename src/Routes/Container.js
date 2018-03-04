import { h, Component } from "preact"
import styled from "styled-components"
import debounce from "lodash.debounce"
import Loading from "../Components/Loading/Loading"
import { SongCard, CardContainer } from "../Components/SongCard/SongCard"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const WithActions = (InnerComponent, infinite = false) =>
  class OuterComponent extends Component {
    componentDidMount() {
      if (infinite) {
        window.addEventListener("scroll", debounce(this.onScroll, 200), false)
      }
    }

    componentWillUnmount() {
      if (infinite) {
        window.removeEventListener(
          "scroll",
          debounce(this.onScroll, 200),
          false
        )
      }
    }

    onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        this.props.loadMore()
      }
    }

    playSong = index => {
      this.props.playSong(index, this.props.location.pathname)
    }

    playlistAction = e => song => {
      if (!e) e = window.event
      if (e.stopPropagation) e.stopPropagation()
      this.props.playlistAction(song)
    }

    render({ loadMore, playlist, loading, location }) {
      const path = location.pathname
      return (
        <Wrapper>
          <InnerComponent />
          <CardContainer>
            {playlist.map((song, index) => (
              <SongCard
                from={path}
                song={song}
                index={index}
                playlistAction={this.playlistAction}
                play={this.playSong}
                key={song.id}
              />
            ))}
            {infinite && <Loading isLoading={loading} loadMore={loadMore} />}
          </CardContainer>
        </Wrapper>
      )
    }
  }
