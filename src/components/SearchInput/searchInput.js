import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { search_songs } from '../../store/actions'

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  flex: 1;
`

const Input = styled.input`
  background-color: rgba(250, 250, 250, .9);
  color: rgba(0, 0, 0, .87);
  border-radius: 4px;
  appearance: none;
  border: none;
  outline: 0;
  font-size: 1rem;
  line-height: 2;
  padding: 0 1em;
  width: 100%;
`

const PreviewSearch = styled.div`
  position: absolute;
  top: 120%;
  left: 0px;
  width: 100%;
  min-height: 50px;
  background-color: white;
  border: 1px solid rgba(250,250,250,.9);
  border-radius: 4px;
  box-shadow: 0px 2px 2px 0px rgba(17, 17, 17, .06);
  z-index: 999;
`

class SearchInput extends React.Component {
  state = {
    value: ""
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }  

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchSongs(this.state.value)
    this.props.history.push("/search")
  }

  render() {
    const { value } = this.state
    
    return (
      <Form onSubmit={this.handleSubmit} >
        <Input placeholder="Search..." value={this.state.value} onChange={this.handleChange}/>

        { value.length > 0 &&
          <PreviewSearch>
            
          </PreviewSearch>
        }
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchSongs: (q) => dispatch(search_songs(q))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchInput));