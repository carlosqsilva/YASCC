import React from 'react'
import { connect } from 'react-redux'

import {
  load_playlist_next,
  play_song_from_btn
} from '../../store/actions'

import Loading from '../Loading/Loading';
import {SongCard, CardContainer} from '../SongCard/SongCard'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll'

const SongList = (props) => {

  const {
    playlist,
    loadingPlaylist
  } = props.state

  return (
    <InfiniteScroll loadMore={props.loadMore} >
      <CardContainer>
        {
          playlist.map( (song, index) => 
            <SongCard 
              song={{...song, index}}
              from="/"
              play={props.playSong}
              key={song.id} />
          )
        }
        <Loading 
          isLoading={loadingPlaylist}
          loadMore={props.loadMore}/>
      </CardContainer>
    </InfiniteScroll>
  )
}

const mapStateToProps = state => ({
  state: state.root
})

const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch(load_playlist_next()),
  playSong: (index, location) => dispatch(play_song_from_btn(index, location))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongList)