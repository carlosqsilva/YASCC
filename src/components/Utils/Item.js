import styled from 'styled-components'

const Item = styled.a`
  flex: ${ props => props.fluid ? 1 : 0};
  cursor: ${ props => props.link ? "pointer" : "default"};

  display: flex;
  align-items: center;
  justify-content: center;
  
  color: rgba(0, 0, 0, .87);
  text-decoration: none;
  font-size: .9rem;
  
  min-width: 60px;
  padding: 0 10px;

  &:hover {
    background-color: rgba(0,0,0,.03);
  }

  @media screen and (max-width: 500px) {
    ${ props => props.noMobile && "display: none"};
  }

  @media screen and (min-width: 500px) {
    ${ props => props.noDesktop && "display: none"};
  }
`

export default Item