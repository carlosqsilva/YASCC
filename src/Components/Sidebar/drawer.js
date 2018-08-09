import { h, Component } from "preact"
import { connect } from "preact-redux"
import Link from "react-router-dom/es/Link"
import withRouter from "react-router-dom/es/withRouter"

import { set_genre, set_tag, set_filter } from "@/actions"
import styled from "styled-components"

import { filter, tags, genres } from "./options"
import { Icon } from "../Utils/Icon"
import Select from "../SelectInput"
import Playlist from "./playlist.svg"
import Recent from "./recent.svg"
import Filter from "./filter.svg"

const Container = styled.div`
  background: var(--lightDark);
  overscroll-behavior-y: contain;
  will-change: transform;
  position: fixed;
  bottom: 0px;
  left: 0px;
  top: 0px;
  width: var(--sidebarWidth);
  font-size: var(--sidebarFontSize);
  z-index: 100;
  overflow-y: scroll;
  transform: ${props =>
    props.visible ? "translateX(0)" : "translateX(-100%)"};

  @media screen and (min-width: 640px) {
    transform: translateX(0);
  }
`

const Segment = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  padding: 0.7rem 0 0.7rem 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`

const LinkSegment = styled(Link)`
  display: flex;
  text-decoration: none;
  padding: 0.7rem 0 0.7rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`

const Label = styled.strong`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 1.1em;
  color: var(--light);
`

const Header = styled.strong`
  color: var(--light);
  margin-bottom: 3px;
  font-size: 1em;
`

const Tag = styled.span`
  background-color: whitesmoke;
  color: #111;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 0.8em;
  padding: 0 0.5rem;
  align-self: center;
`

const Option = styled.a`
  flex: 1;
  display: flex;
  cursor: pointer;
  font-size: 1em;
  text-decoration: none;
  padding: 4px 0;
  color: ${props => (props.active ? "#fff" : "#999")};

  &:hover {
    color: white;
  }
`

class Sidebar extends Component {
  state = {
    active: ""
  }

  changeRoute = route => {
    this.props.history.push(route)
  }

  active = name => {
    this.setState({ active: name }, () => {
      this.changeRoute("/")
    })
  }

  onChange = e => {
    this.props.setFilter(e.target.value)
  }

  onTag = ({ target: { name } }) => {
    this.props.setTag(name)
    this.active(name)
  }

  onGenre = ({ target: { name } }) => {
    this.props.setGenre(name)
    this.active(name)
  }

  render({ sidebarVisible, qtd, InnerProps }, { active }) {
    return (
      <Container visible={sidebarVisible} {...InnerProps}>
        <LinkSegment to="/recent">
          <Icon size={20} src={Recent} />
          <Label>Recent Played</Label>
        </LinkSegment>

        <LinkSegment to="/playlist">
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
          {tags.map((tag, i) => (
            <Option
              key={i}
              name={tag.value}
              active={active === tag.value}
              onClick={this.onTag}
            >
              {tag.label}
            </Option>
          ))}
        </Segment>

        <Segment>
          <Header>Music Genres</Header>
          {genres.map((genre, i) => (
            <Option
              key={i}
              name={genre.value}
              active={active === genre.value}
              onClick={this.onGenre}
            >
              {genre.label}
            </Option>
          ))}
        </Segment>
      </Container>
    )
  }
}

const state = ({ root: { sidebarVisible }, playlist: { qtd } }) => ({
  sidebarVisible,
  qtd
})

const actions = {
  setFilter: set_filter,
  setGenre: set_genre,
  setTag: set_tag
}

export default withRouter(
  connect(
    state,
    actions
  )(Sidebar)
)
