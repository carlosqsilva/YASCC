import { h, Component } from "preact"
import { connect } from "preact-redux"
import styled from "styled-components"
import withRouter from "react-router-dom/es/withRouter"

import { search_songs } from "@/actions"

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  flex: 1;
`

const Input = styled.input`
  background: var(--light);
  color: var(--secondary);
  border-radius: 4px;
  border: none;
  outline: 0;
  font-size: 1rem;
  line-height: 2;
  padding: 0 1em;
  width: 100%;
`

class SearchInput extends Component {
  state = {
    value: ""
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.searchSongs(this.state.value)
    this.props.history.push("/search")
  }

  render(_, { value }) {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          placeholder="Search..."
          value={value}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

const actions = {
  searchSongs: search_songs
}

export default connect(
  null,
  actions
)(withRouter(SearchInput))
