import { h, Component } from "preact"
import styled from "styled-components"
import Loading from "../Components/Loading/Loading"
import { SongCard, CardContainer } from "../Components/SongCard/SongCard"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 65px;
  margin-bottom: 60px;
`

export const WithActions = (
  InnerComponent,
  infinite = false,
  fromPlaylist = false
) => {
  const Card = SongCard(fromPlaylist)
  return class OuterComponent extends Component {
    playSong = index => {
      this.props.playSong(index, this.props.location.pathname)
    }

    playlistAction = e => song => {
      if (!e) e = window.event
      if (e.stopPropagation) e.stopPropagation()
      this.props.playlistAction(song)
    }

    render({ loadMore, playlist, loading, active }) {
      return (
        <Wrapper>
          {InnerComponent && <InnerComponent />}
          <CardContainer>
            {playlist.map((song, index) => (
              <Card
                song={song}
                index={index}
                active={active === song.id}
                playlistAction={this.playlistAction}
                play={this.playSong}
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
