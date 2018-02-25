import { h, Component } from "preact"
import debounce from "lodash.debounce"

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

  render({ children }) {
    return children[0]
  }
}
