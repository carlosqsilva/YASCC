import React from 'react'
import { connect } from 'react-redux'
import { SongCard, CardContainer} from '../SongCard/SongCard'
import Loading from '../Loading/Loading';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll';

import {
  load_next_results,
  add_to_playlist,
  play_song_from_btn
} from '../../store/actions'

const Search = (props) => {

  const {
    results,
    loadingSearch
  } = props.state

  return (
    <InfiniteScroll loadMore={props.loadMore}>
      <CardContainer>
        {
          results.map( (song, index) => (
            <SongCard
              song={{...song, index}}
              from="/search"
              play={props.playSong}
              playlistAction={props.addToPlaylist}
              key={song.id}/>
          ))
        }
        <Loading 
          isLoading={loadingSearch}
          loadMore={props.loadMore}/>
      </CardContainer>
    </InfiniteScroll>
  )
}

const mapStateToProps = state => ({
  state: state.search
})

const mapDispatchToProps = dispatch =>({
  loadMore: () => dispatch(load_next_results()),
  playSong: (index, location) => dispatch(play_song_from_btn(index, location)),
  addToPlaylist: (song) => dispatch(add_to_playlist(song))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)