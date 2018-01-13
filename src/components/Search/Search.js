import React from 'react'
import { connect } from 'react-redux'
import { SongCard, CardContainer} from '../SongCard/SongCard'
import Loading from '../Loading/Loading';
import InfiniteMore from '../InfiniteScroll/InfiniteScroll';

import {
  load_next_results,
  play_song_from_btn
} from '../../store/actions'

const Search = (props) => {

  const {
    results,
    loadingSearch
  } = props.state

  return (
    <InfiniteMore loadMore={props.loadMore}>
      <CardContainer>
        {
          results.map( (song, index) => (
            <SongCard
              song={{...song, index}}
              from="/search"
              play={props.playSong}
              key={song.id}/>
          ))
        }
        <Loading 
          isLoading={loadingSearch}
          loadMore={props.loadMore}/>
      </CardContainer>
    </InfiniteMore>
  )
}

const mapStateToProps = state => ({
  state: state.search
})

const mapDispatchToProps = dispatch =>({
  loadMore: () => dispatch(load_next_results()),
  playSong: (index, location) => dispatch(play_song_from_btn(index, location))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)