import { h, Component } from "preact"
import styled, { keyframes } from "styled-components"

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoadingSpin = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 0.25rem solid #dedede;
  border-top-color: #444;
  animation: ${spin} 1s infinite linear;
`

const LoadMore = styled.a`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  cursor: pointer;
  text-align: center;
  background-color: #757575;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.3rem 1rem;
  border-radius: 2px;
  transition: all 400ms ease-out;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
`

class Loading extends Component {
  componentDidMount() {
    this.observer = new IntersectionObserver(this.props.loadMore)
    this.observer.observe(this.target)
  }

  componentWillUnmount() {
    this.observer.unobserve(this.target)
  }

  render({ loadMore, isLoading }) {
    return (
      <LoadMore onClick={loadMore} innerRef={e => (this.target = e)}>
        {isLoading ? <LoadingSpin /> : "Load More"}
      </LoadMore>
    )
  }
}

export default Loading
