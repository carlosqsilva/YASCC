import { h, Component } from "preact"
import styled from "styled-components"
import debounce from "lodash.debounce"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 1900px) 1fr;
  padding: 10px;

  @media screen and (min-width: 500px) {
    padding: 15px;
  }
`

export class InfiniteScroll extends Component {
  componentDidMount() {
    window.addEventListener("scroll", debounce(this.handleScroll, 200), false)
  }

  componentWillUnmount() {
    window.removeEventListener(
      "scroll",
      debounce(this.handleScroll, 200),
      false
    )
  }

  handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 150
    ) {
      this.props.loadMore()
    }
  }

  render() {
    return <Container>{this.props.children}</Container>
  }
}
