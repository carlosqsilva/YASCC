import { h, Component, createRef } from "preact";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpin = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 0.2rem solid #dedede;
  border-top-color: #444;
  animation: ${spin} 1s infinite linear;
`;

const LoadMore = styled.button`
  all: unset;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 60px;
  border-radius: 2px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

class Loading extends Component {
  elementRef = createRef();

  componentDidMount() {
    this.observer = new IntersectionObserver(this.props.loadMore);
    this.observer.observe(this.elementRef.current);
  }

  componentWillUnmount() {
    this.observer.unobserve(this.elementRef.current);
  }

  render({ loadMore, isLoading }) {
    return (
      <LoadMore onClick={loadMore} ref={this.elementRef}>
        {isLoading ? <LoadingSpin /> : <strong>Load More...</strong>}
      </LoadMore>
    );
  }
}

export default Loading;
