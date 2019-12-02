import { connect } from "react-redux";
import { WithActions } from "./Container";

import {
  load_next_results,
  add_to_playlist,
  play_song_from_btn
} from "@/actions";

const Search = WithActions({
  infinite: true
});

const state = ({
  playlist: { search, loading },
  player: { active },
  root: { ready }
}) => ({
  playlist: search,
  active,
  loading,
  ready
});

const actions = {
  loadMore: load_next_results,
  playSong: play_song_from_btn,
  playlistAction: add_to_playlist
};

export default connect(state, actions)(Search);
