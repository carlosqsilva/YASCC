import { connect } from "react-redux";
import {
  load_playlist_next,
  add_to_playlist,
  play_song_from_btn
} from "@/actions";

import { WithActions } from "./Container";

const Home = WithActions({
  infinite: true
});

const state = ({ player: { active }, playlist: { playlist, loading } }) => ({
  playlist,
  active,
  loading
});

const actions = {
  loadMore: load_playlist_next,
  playSong: play_song_from_btn,
  playlistAction: add_to_playlist
};

export default connect(state, actions)(Home);
