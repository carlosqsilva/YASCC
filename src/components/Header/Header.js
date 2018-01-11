import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggle_sidebar, search_songs } from '../../store/actions'
import styled from 'styled-components'
import Icon from '../Utils/Icon'
import Item from '../Utils/Item'
import Menu from './menu.svg';
import Github from './github.svg';

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  background-color: white;

&::after {
  box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, .06);
  position: absolute;
  bottom: -5px;
  width: 100%;
  height: 5px;
  content: "";
}
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 8px;

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

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  flex: 1;
`

class Header extends Component {
  state = {
    value: ""
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }  

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchSongs(this.state.value)
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <Item link onClick={this.props.toggleSidebar}>
            <Icon size={20} src={Menu}/>
          </Item>

          <Form onSubmit={this.handleSubmit} >
            <Input placeholder="Search..." value={this.state.value} onChange={this.handleChange}/>
          </Form>
          
          <Item link href="https://github.com/carlosqsilva/yascc">
            <Icon size={22} src={Github}/>
          </Item>
        </Container>
      </Wrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggle_sidebar()),
    searchSongs: (q) => dispatch(search_songs(q))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);