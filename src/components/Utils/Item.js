import styled from 'styled-components'

const Item = styled.a`
  flex: ${ props => props.fluid ? 1 : 0};
  cursor: ${ props => props.link ? "pointer" : "default"};
  
  color: rgba(0, 0, 0, .87);
  text-decoration: none;
  font-size: .9rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  min-width: 60px;
  padding: 0 10px;

  &:hover {
    background-color: rgba(0,0,0,.03);
  }
`

export default Item