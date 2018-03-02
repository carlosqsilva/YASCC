import { h, Component } from "preact"
import { connect } from "react-redux"
import Link from "react-router-dom/es/Link"
import { toggle_sidebar, load_playlist } from "@/store/actions"
import styled from "styled-components"

import Icon from "../Utils/Icon"
import Logo from "./logo.svg"
import Playlist from "./playlist.svg"

const Container = styled.div`
  background: linear-gradient(to right, #232526, #414345);
  transition: all 250ms ease;
  position: fixed;
  bottom: 0px;
  left: 0px;
  top: 0px;
  width: 220px;
  z-index: 100;
  overflow-y: scroll;
  transform: ${props =>
    props.visible ? "translateX(0)" : "translateX(-100%)"};

  @media screen and (min-width: 500px) {
    transform: translateX(0);
  }
`

const Overlay = styled.div`
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 500px) {
    display: none;
  }
`

const Segment = styled.div`
  display: flex;
  text-decoration: none;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  padding: 0.7rem 0 0.7rem 1rem;
  color: rgba(255, 255, 255, 0.9);

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`

const LinkSegment = Segment.withComponent(Link)

const Label = styled.strong`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 1.1rem;
`

const Tag = styled.span`
  background-color: whitesmoke;
  color: #111;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 0.8rem;
  padding: 0 0.5rem;
  align-self: center;
`

const Option = styled(Link)`
  flex: 1;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  padding: 3px 0;
  transition: all 250ms ease;
  color: ${props => (props.active ? "white" : "rgba(255, 255, 255, .5)")};

  &:hover {
    color: white;
  }
`

const music = [
  "Alternative Rock",
  "Ambient",
  "Classical",
  "Country",
  "Dance & EDM",
  "Dancehall",
  "Deep House",
  "Disco",
  "Drum & Bass",
  "Dubstep",
  "Electronic",
  "Hip-hop & Rap",
  "House",
  "Indie",
  "Jazz & Blues",
  "Latin",
  "Metal",
  "Piano",
  "Pop",
  "R&B & Soul",
  "Reggae",
  "Reggaeton",
  "Rock",
  "Soundtrack",
  "Techno",
  "Trance",
  "Trap",
  "Triphop",
  "World"
]

class Sidebar extends Component {
  state = {
    activeItem: ""
  }

  handleClick = e => {
    const { name } = e.target

    this.setState({
      activeItem: name
    })

    let genre = name.replace(/[-|&|\s]+/g, "").toLowerCase()
    this.props.loadPlaylist(genre)
  }

  render({ sidebarVisible, qtd }, { activeItem }) {
    return (
      <div>
        <Container visible={sidebarVisible}>
          <Segment horizontal>
            <Icon size={35} src={Logo} />
            <Label title="Yet Another SoundCloud Client">YASCC</Label>
          </Segment>

          <LinkSegment horizontal to="/playlist">
            <Icon size={20} src={Playlist} />
            <Label>Playlist</Label>
            <Tag>{qtd}</Tag>
          </LinkSegment>

          <Segment>
            {music.map((val, i) => (
              <Option
                key={i}
                to="/"
                name={val}
                active={activeItem === val}
                onClick={this.handleClick}
              >
                {val}{" "}
              </Option>
            ))}
          </Segment>
        </Container>

        {sidebarVisible && <Overlay onClick={this.props.toggleSidebar} />}
      </div>
    )
  }
}

const state = ({ root, userPlaylist }) => ({
  sidebarVisible: root.sidebarVisible,
  qtd: userPlaylist.playlist.length
})

const actions = {
  loadPlaylist: load_playlist,
  toggleSidebar: toggle_sidebar
}

export default connect(state, actions)(Sidebar)
