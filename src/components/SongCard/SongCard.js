import React from 'react'
import styled from 'styled-components'
import Icon from '../Utils/Icon'
import Play from './play.svg'
import Add from './add.svg'

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items; stretch;
  border-radius: 4px;
  overflow: hidden;
  padding: 10px;

  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.08);
  cursor: pointer;
`

const Artwork = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 65px;

  > img {
    display: none;
  }

  @media screen and (min-width: 500px) {
    > img {
      opacity: 0;
      transform: scale(0);
      transition: all 200ms ease;

      width: 100%;
      margin: 20px auto;
      display: block;
    }

    &:hover {
      > img {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`

const Container = styled.div`
  position: relative;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  flex: 1;
`

const Title = styled.a`
  font-size: .75rem;
  color: #444;

  @media screen and (min-width: 500px) {
    font-size: .8rem;
    /* cursor: pointer; */

    &:hover {
      text-decoration: underline;
    }
  }
`

const User = styled.a`
  font-size: .7rem;
  color: #333;
  margin-bottom: 5px;
`

const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
`

const Duration = styled.span`
  margin-left: 15px;
  color: #444;
  font-size: .8rem;
`

class SongCard  extends React.Component {

  handleClick = () => {
    const {
      stream,
      index
    } = this.props.song

    this.props.play(index, stream)
  }

  render () {
    
    const {
      title,
      user,
      artwork,
      duration,
    } = this.props.song
    
    return (
      <Card onClick={this.handleClick}>
        
        <Artwork 
          
          style={{backgroundImage: `url(${artwork})`}}>

          <Icon src={Play} size={30} />
        </Artwork>
        
        <Container>

          <Title>{title}</Title>
          <User>{user}</User>

          <Wrapper>
            
            <img 
              onClick={() => console.log("Ola Mundo!!!")}
              src={Add} width={12} height={12} 
              title="Add to Playlist" alt=""/>

            <Duration>{duration}</Duration>
          </Wrapper>

        </Container>
      
      </Card>
    )  
  }
}

export default SongCard