import React from 'react';
import { connect } from 'react-redux'

import { toggle_sidebar } from '../../store/actions'
import styled from 'styled-components'
import SearchInput from '../SearchInput/searchInput'
import Icon from '../Utils/Icon'
import Item from '../Utils/Item'
import Menu from './menu.svg';
import Github from './github.svg';

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: flex-start;

  @media screen and (min-width: 500px) {
    padding-left: 250px;
  }

  &::after {
    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, .06);
    position: absolute;
    bottom: -5px;
    width: 100%;
    height: 5px;
    content: "";
  }
`

const Header = (props) => {

  return (
    <Wrapper>
      <Item link noDesktop onClick={props.toggleSidebar}>
        <Icon size={22} src={Menu}/>
      </Item>

      <SearchInput />
      
      <Item link noMobile href="https://github.com/carlosqsilva/yascc">
        <Icon size={23} src={Github}/>
      </Item>
    </Wrapper>
  )
}

const actions = dispatch => ({
  toggleSidebar: () => dispatch(toggle_sidebar()),
})

export default connect(null, actions)(Header)