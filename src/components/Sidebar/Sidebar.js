import React from 'react';
import { connect } from 'react-redux';
import { toggle_sidebar } from '../../store/actions';
import styled from 'styled-components';

import Icon from '../Utils/Icon';
import Logo from './logo.svg';
import Favorite from './favorite.svg'
import Playlist from './playlist.svg'

const Container = styled.div`
  background-color: rgb(27, 28, 29);
  transition: all 250ms ease;
  position: absolute;
  bottom: 0px;
  left: 0px;
  top: 0px;
  width: 250px;
  z-index: 100;
  overflow-y: scroll;
`

const Segment = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: ${props => props.horizontal ? "row" : "column"};
  padding: .7rem 0 .7rem 1rem;
  color: rgba(255, 255, 255, .9);

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, .08);
  }
  
  > strong {
    flex: 1;
    align-self: center;
    margin-left: 20px;
  }
`

const Header = styled.div`
  margin: 0 0 .5rem;
  font-weight: 700;
  font-size: 1rem;

`

const Option = styled.a`
  flex: 1 0 auto;
  cursor: pointer;
  font-size: .9rem;
  padding: 2px 0;
  transition: all 250ms ease;
  color: ${ props => props.active === true ? "rgba(255, 255, 255, .9)" : "rgba(255, 255, 255, .5)"};

  &:hover {
    color: rgba(255, 255, 255, .9);
  }
`

const music = ["Alternative Rock", "Ambient", "Classical", "Country", "Dance & EDM", "Dancehall", "Deep House", "Disco", "Drum & Bass", "Dubstep", "Electronic", "Hip-hop & Rap", "House", "Indie", "Jazz & Blues", "Latin", "Metal", "Piano", "Pop", "R&B & Soul", "Reggae", "Reggaeton", "Rock", "Soundtrack", "Techno", "Trance", "Trap", "Triphop", "World"]

class Sidebar extends React.Component {
  
  state = {
    activeItem: ""
  }
  
  handleClick = (e) => {
    this.setState({
      activeItem: e.target.name 
    })
  }

  
  render() {
    const { activeItem } = this.state

    return (
      <Container style={this.props.style}>
        
        <Segment horizontal>
          <Icon size={30} src={Logo}/>
          <strong title="Yet Another SoundCloud Client" >YASCC</strong>
        </Segment>

        <Segment horizontal>
          <Icon size={20} src={Favorite} />
          <strong>Favorites</strong>
        </Segment>
        
        <Segment horizontal>
          <Icon size={20} src={Playlist} />
          <strong>Playlist</strong>
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
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggle_sidebar()),
  }
}

export default connect(null, mapDispatchToProps)(Sidebar)