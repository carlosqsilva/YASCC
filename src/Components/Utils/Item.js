import styled from "styled-components"

const Item = styled.a`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  font-size: 0.9rem;

  min-width: 60px;
  padding: 0 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  @media screen and (max-width: 640px) {
    ${props => props.noMobile && "display: none"};
  }

  @media screen and (min-width: 640px) {
    ${props => props.noDesktop && "display: none"};
  }
`

export default Item
