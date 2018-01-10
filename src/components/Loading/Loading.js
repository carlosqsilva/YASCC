import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  margin: 100px auto;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 0.25rem solid #dedede;
  border-top-color: #444;
  animation: ${spin} 1s infinite linear;
`

export default Loading