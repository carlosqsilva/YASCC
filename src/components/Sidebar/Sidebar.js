import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { toggle_sidebar, load_playlist } from '../../store/actions';
import styled from 'styled-components';

import Icon from '../Utils/Icon';
import Logo from './logo.svg';
import Playlist from './playlist.svg'

const Fragment = React.Fragment

const Container = styled.div`
  background-color: rgb(27, 28, 29);
  transition: all 250ms ease;
  position: fixed;
  bottom: 0px;
  left: 0px;
  top: 0px;
  width: 250px;
  z-index: 100;
  overflow-y: scroll;
  transform: translateX(-100%);

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
  background: rgba(0,0,0,.5);
  transition: all 250ms ease;

  @media screen and (min-width: 500px) {
    display: none;
  }
`

const Segment = styled.div`
  cursor: ${ props => props.link ? "pointer" : "default"};
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: ${props => props.horizontal ? "row" : "column"};
  padding: .7rem 0 .7rem 1rem;
  color: rgba(255, 255, 255, .9);

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, .08);
  }
`

const Label = styled.strong`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 1.1rem;
`

const Link = styled.a`
  display: inline;
  text-decoration: none;
  font-size: .8rem;
  color: rgba(255, 255, 255, .9);
  align-self: center;
  margin: 0 20px 0 0;
`

const Header = styled.div`
  margin: 0 0 .5rem;
  font-weight: 700;
  font-size: 1.1rem;
`

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content; center;
  background-color: whitesmoke;
  color: #111;
  border-radius: 5px;
  margin-right: 20px;
  font-size: .8rem;
  padding: 0 .7rem;
  align-self: center;
`

const Option = styled.a`
  flex: 1;
  cursor: pointer;
  font-size: 1rem;
  padding: 5px 0;
  transition: all 250ms ease;
  color: ${ props => props.active === true ? "white" : "rgba(255, 255, 255, .5)"};

  &:hover {
    color: rgba(255, 255, 255, .9);
  }
`

const music = ["Alternative Rock", "Ambient", "Classical", "Country", "Dance & EDM", "Dancehall", "Deep House", "Disco", "Drum & Bass", "Dubstep", "Electronic", "Hip-hop & Rap", "House", "Indie", "Jazz & Blues", "Latin", "Metal", "Piano", "Pop", "R&B & Soul", "Reggae", "Reggaeton", "Rock", "Soundtrack", "Techno", "Trance", "Trap", "Triphop", "World"]

class Sidebar extends React.Component {
  
  state = {
    activeItem: ""
  }
  
  goToPlaylist = () => {
    this.props.history.push("/playlist")
  }

  handleClick = (e) => {
    const { name } = e.target
    this.setState({
      activeItem: name 
    })
    
    let genre = name.replace(/[-|&|\s]+/g, "").toLowerCase()
    if (this.props.history.location.pathname !== "/") {
      this.props.history.push("/")
    }
    this.props.loadPlaylist(genre)
  }

  render() {
    const { activeItem } = this.state
    const {sidebarVisible} =this.props.state

    return (
      <Fragment>

        <Container style={ sidebarVisible ? {transform: "translateX(0)"}: {}} >        
          <Segment horizontal>
            <Icon size={35} src={Logo}/>
            <Label title="Yet Another SoundCloud Client" >YASCC</Label>
            <Link href="https://carloseng.com" target="_blanck" rel="noopener noreferrer">by Carlos Silva</Link>
          </Segment>

          <Segment horizontal link onClick={this.goToPlaylist}>
            <Icon size={20} src={Playlist} />
            <Label>Playlist</Label>
            <Tag>{this.props.userplaylist.num}</Tag>
          </Segment>
          
          <Segment>
            <Header>Music</Header>
            {
              music.map( (val, i) => 
                <Option 
                key={i}
                name={val}
                active={activeItem === val}
                onClick={this.handleClick}>{val} </Option>)
            }
          </Segment>        
        </Container>
        
        {
          sidebarVisible &&
          <Overlay onClick={this.props.toggleSidebar} />
        }
      
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state.root,
    userplaylist: state.userPlaylist
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPlaylist: (genre) => dispatch(load_playlist(genre)),
    toggleSidebar: () => dispatch(toggle_sidebar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sidebar));