import React from 'react'
import styled from 'styled-components'
import Item from '../Utils/Item'
import Icon from '../Utils/Icon'

import play from './play.svg'
import back from './back.svg'
import next from './next.svg'
import pause from './pause.svg'

const Wrapper = styled.div`
  background-color: papayawhip;
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr minmax(300px, 1440px) 1fr;
  z-index: 200;
`

const Container = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: flex-start;
  align-content: stretch;
  background-color: aquamarine;
`

const Controls = styled.div`
  background-color: white;
  width: 250px;
  display: flex;
  align-content: stretch;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: -2px;
    top: 0px;
    transform: translateY(50%);
    background-color: #444444;
    width: 4px;
    height: 30px;
    border-radius: 4px;
  }
`

const Song = styled.div`
  
`

const Player = () => {
  return (
    <Wrapper>
      <Container>
        <Controls>
          <Item link><Icon src={back} size={35} /></Item>
          <Item link><Icon src={play} size={35} /></Item>
          <Item link><Icon src={next} size={35} /></Item>
        </Controls>
      </Container>
    </Wrapper>
  )
}

export default Player