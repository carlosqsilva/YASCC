import { h, Component } from "preact"

class Aside extends Component {
  componentDidMount() {}

  render({ children }) {
    return children({
      translation: "100"
    })
  }
}
