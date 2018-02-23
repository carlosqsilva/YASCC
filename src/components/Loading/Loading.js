import { h } from "preact"
import styled, { keyframes } from "styled-components"

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
  background-color: #fff;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1rem;
  margin: 0;
  padding: 0.3em 1em;
  border: 10px;
  border-radius: 2px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.12);
`

const Loading = ({ isLoading, loadMore }) => (
  <Wrapper>
    {isLoading === true ? (
      <LoadingSpin />
    ) : (
      <LoadMore onClick={loadMore}>Load More</LoadMore>
    )}
  </Wrapper>
)

export default Loading
