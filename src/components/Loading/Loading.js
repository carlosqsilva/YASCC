import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
`

const LoadingSpin = styled.div`
  margin: 20px auto;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 0.25rem solid #dedede;
  border-top-color: #444;
  animation: ${spin} 1s infinite linear;
`

const LoadMore = styled.button`
  background-color: #444;
  cursor:  pointer;
  color: rgb(250, 250, 250);
  font-size: 1rem;
  margin: 1em;
  padding: .25em 1em;
  border: 2px solid #dedede;
  border-radius: 4px; 
`

const Loading = (props) => {
  const { isLoading, loadMore } = props

  return (
    <Wrapper>
      {
        isLoading === true ? <LoadingSpin/> : <LoadMore onClick={loadMore}>Load More</LoadMore>
      }
    </Wrapper>
  )
}

export default Loading