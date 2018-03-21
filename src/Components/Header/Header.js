import { h } from "preact"
import { connect } from "react-redux"

import { toggle_sidebar } from "@/store/actions"
import styled from "styled-components"
import SearchInput from "../SearchInput/searchInput"
import Icon from "../Utils/Icon"
import Item from "../Utils/Item"
import Menu from "./menu.svg"
import Github from "./github.svg"

const Wrapper = styled.div`
  background: ${props => (props.online ? "#fff" : "#ef5350")};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  display: flex;

  @media screen and (min-width: 500px) {
    padding-left: 220px;
  }

  &::after {
    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, 0.06);
    position: absolute;
    bottom: -5px;
    width: 100%;
    height: 5px;
    content: "";
  }
`

const Header = ({ toggleSidebar, online }) => (
  <Wrapper online={online}>
    <Item link noDesktop onClick={toggleSidebar}>
      <Icon size={24} src={Menu} />
    </Item>

    <SearchInput />

    <Item
      link
      noMobile
      href="https://github.com/carlosqsilva/yascc"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={24} src={Github} />
    </Item>
  </Wrapper>
)

const state = ({ root }) => ({
  online: root.online
})

const actions = {
  toggleSidebar: toggle_sidebar
}

export default connect(state, actions)(Header)
