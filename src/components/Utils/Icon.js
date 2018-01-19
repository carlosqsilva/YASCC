import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  align-self: center;
`

const Container = styled.div`
  display: inline-flex;
  position: relative;

  &:hover {
    > span {
      opacity: 1;
    }
  }
`

const Tooltip = styled.span`
  display: none;
  @media screen and (min-width: 500px){
    opacity: 0;
    display: inline-block;
    pointer-events: none;
    background: #000;
    color: #fff;
    font-size: .8rem;
    padding: 5px 8px;
    border-radius: 6px;
    white-space: nowrap;
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;

    &::after {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent black transparent;
    }
  }
`

const Icon = (props) => {  
  const { size, src, ...other } = props  
  return <Image width={size} height={size} src={src} {...other} />
}

export const WithTooltip = (props) => {
  const { children, tooltip } = props
  return (
    <Container>
      { children }
      <Tooltip>{ tooltip }</Tooltip>
    </Container>
  )
}

export default Icon