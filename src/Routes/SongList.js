import { h, Component } from "preact"
import { connect } from "react-redux"
import {
  load_playlist_next,
  add_to_playlist,
  play_song_from_btn
} from "../store/actions"

import Loading from "../Components/Loading/Loading"
import { SongCard, CardContainer } from "../Components/SongCard/SongCard"
import { InfiniteScroll } from "../Components/InfiniteScroll/InfiniteScroll"

class SongList extends Component {
  playSong = index => {
    this.props.playSong(index, this.props.location.pathname)
  }

  playlistAction = e => song => {
    if (!e) e = window.event
    if (e.stopPropagation) e.stopPropagation()
    this.props.addToPlaylist(song)
  }

  render({ loadMore, playlist, loading, location }) {
    const path = location.pathname
    return (
      <InfiniteScroll loadMore={loadMore}>
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
          <Loading isLoading={loading} loadMore={loadMore} />
        </CardContainer>
      </InfiniteScroll>
    )
  }
}

const state = ({ root }) => ({
  playlist: root.playlist,
  loading: root.loadingPlaylist
})

const actions = {
  loadMore: load_playlist_next,
  playSong: play_song_from_btn,
  addToPlaylist: add_to_playlist
}

export default connect(state, actions)(SongList)
