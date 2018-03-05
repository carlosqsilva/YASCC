import { h, Component } from "preact"
import { connect } from "react-redux"
import withRouter from "react-router-dom/es/withRouter"
import { toggle_sidebar, set_genre, set_tag, set_filter } from "@/store/actions"
import styled from "styled-components"

import { filter, tags, genre } from "./options"
import { Icon } from "../Utils/Icon"
import Select from "../SelectInput"
import Playlist from "./playlist.svg"
import Filter from "./filter.svg"

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
  position: fixed;
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

const LinkSegment = Segment.extend`
  cursor: pointer;
`

const Label = styled.strong`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 1.1rem;
`

const Header = styled.strong`
  color: #fafafa;
  margin-bottom: 3px;
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

const Option = styled.a`
  flex: 1;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  padding: 3px 0;
  transition: all 250ms ease;
  color: ${props => (props.active ? "white" : "#999")};

  &:hover {
    color: white;
  }
`

class Sidebar extends Component {
  state = {
    activeItem: ""
  }

  changeRoute = route => {
    if (this.props.location.pathname !== route) {
      this.props.history.push(route)
    }
  }

  active = name => {
    this.setState({ activeItem: name })
    this.changeRoute("/")
  }

  onChange = e => {
    this.props.setFilter(e.target.value)
  }

  onTag = e => {
    const { name } = e.target
    this.props.setTag(name)
    this.active(name)
  }

  onGenre = e => {
    const { name } = e.target
    this.props.setGenre(name)
    this.active(name)
  }

  render({ sidebarVisible, qtd }, { activeItem }) {
    return (
      <div>
        <Container visible={sidebarVisible}>
          <LinkSegment horizontal onClick={() => this.changeRoute("/playlist")}>
            <Icon size={20} src={Playlist} />
            <Label>Playlist</Label>
            <Tag>{qtd}</Tag>
          </LinkSegment>

          <Segment horizontal>
            <Icon size={20} src={Filter} />
            <Select options={filter} onChange={this.onChange} />
          </Segment>

          <Segment>
            <Header>Popular Tags</Header>
            {tags.map((_, i) => (
              <Option
                key={i}
                name={_.value}
                active={activeItem === _.value}
                onClick={this.onTag}
              >
                {_.label}
              </Option>
            ))}
          </Segment>

          <Segment>
            <Header>Music Genres</Header>
            {genre.map((_, i) => (
              <Option
                key={i}
                name={_.value}
                active={activeItem === _.value}
                onClick={this.onGenre}
              >
                {_.label}
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
  setFilter: set_filter,
  setGenre: set_genre,
  setTag: set_tag,
  toggleSidebar: toggle_sidebar
}

export default withRouter(connect(state, actions)(Sidebar))
