import { h } from "preact"
import styled from "styled-components"

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  align-self: center;

  &:hover {
    > span {
      opacity: 1;
    }
  }
`

const Tooltip = styled.span`
  display: none;
  @media screen and (min-width: 500px) {
    opacity: 0;
    display: inline-block;
    pointer-events: none;
    background: #000;
    color: #fff;
    font-size: 0.8rem;
    padding: 5px 8px;
    border-radius: 6px;
    white-space: nowrap;
    position: absolute;
    top: 180%;
    left: 50%;
    transform: translateX(-85%);
    z-index: 999;

    &::after {
      content: "";
      position: absolute;
      bottom: 100%;
      right: 10%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent black transparent;
    }
  }
`

export const Icon = styled.img.attrs({
  alt: "",
  width: props => props.size,
  height: props => props.size
})`
  align-self: center;
`

export const WithTooltip = ({ children, tooltip }) => (
  <Container>
    {children}
    <Tooltip>{tooltip}</Tooltip>
  </Container>
)

export default Icon
