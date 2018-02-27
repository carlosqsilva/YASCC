import { Component } from "preact"
import debounce from "lodash.debounce"

export class InfiniteScroll extends Component {
  componentDidMount() {
    window.addEventListener("scroll", debounce(this.onScroll, 200), false)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", debounce(this.onScroll, 200), false)
  }

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      this.props.loadMore()
    }
  }

  render({ children }) {
    return children[0]
  }
}
