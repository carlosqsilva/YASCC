import { h } from "preact";
import { connect } from "react-redux";
import styled from "styled-components";

import { toggle_sidebar, toggle_dark_mode } from "@/actions";
import SearchInput from "../SearchInput";
import { Icon, SVGIcon } from "../Utils/Icon";
import Item from "../Utils/Item";
import Menu from "./menu.svg";
import Github from "./github.svg";

const Wrapper = styled.div`
  background: ${props => (props.online ? "var(--primary)" : "var(--danger)")};
  backface-visibility: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  display: flex;
  z-index: 10;
  padding-left: var(--sidebarSpace);

  &::after {
    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, 0.06);
    position: absolute;
    bottom: -5px;
    right: 0px;
    width: 100%;
    height: 5px;
    content: "";
  }
`;

const Header = ({ toggleSidebar, toggleDarkMode, online, darkMode }) => (
  <Wrapper online={online}>
    <Item link noDesktop onClick={toggleSidebar}>
      <Icon size={24} src={Menu} />
    </Item>

    <SearchInput />

    <Item link onClick={toggleDarkMode} title="Toggle dark mode">
      <SVGIcon size={24} active={darkMode}>
        <path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z" />
      </SVGIcon>
    </Item>

    <Item
      noMobile
      href="https://github.com/carlosqsilva/yascc"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={24} src={Github} />
    </Item>
  </Wrapper>
);

const state = ({ root }) => ({
  online: root.online,
  darkMode: root.darkMode
});

const actions = {
  toggleSidebar: toggle_sidebar,
  toggleDarkMode: toggle_dark_mode
};

export default connect(state, actions)(Header);
