import { connect } from "react-redux";
import { WithActions } from "./Container";

import { play_song_from_btn, remove_from_playlist } from "@/actions";

const Playlist = WithActions({
  fromPlaylist: true
});

const state = ({
  playlist: { user },
  player: { active },
  root: { ready }
}) => ({
  playlist: user,
  active,
  ready
});

const actions = {
  playSong: play_song_from_btn,
  playlistAction: remove_from_playlist
};

export default connect(state, actions)(Playlist);
