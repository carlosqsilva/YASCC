import { h, Component } from "preact"
import { connect } from "react-redux"
import { SongCard, CardContainer } from "../Components/SongCard/SongCard"
import Loading from "../Components/Loading/Loading"
import { InfiniteScroll } from "../Components/InfiniteScroll/InfiniteScroll"

import {
  load_next_results,
  add_to_playlist,
  play_song_from_btn
} from "../store/actions"

class Search extends Component {
  playSong = index => {
    this.props.playSong(index, this.props.location.pathname)
  }

  playlistAction = e => song => {
    if (!e) e = window.event
    if (e.stopPropagation) e.stopPropagation()
    this.props.addToPlaylist(song)
  }

  render({ results, loading, loadMore, location }) {
    const path = location.pathname
    return (
      <InfiniteScroll loadMore={loadMore}>
        <CardContainer>
          {results.map((song, index) => (
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

const state = ({ search }) => ({
  results: search.results,
  loading: search.loadingSearch
})

const actions = {
  loadMore: load_next_results,
  playSong: play_song_from_btn,
  addToPlaylist: add_to_playlist
}

export default connect(state, actions)(Search)
