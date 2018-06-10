import styled from "styled-components"

export const Icon = styled.img.attrs({
  alt: "",
  width: props => props.size,
  height: props => props.size
})`
  align-self: center;
`

export const SVGIcon = styled.svg.attrs({
  width: props => props.size,
  height: props => props.size,
  viewBox: "0 0 24 24"
})`
  fill: ${props => (props.active ? "#21d4fd" : "#444")};
`
