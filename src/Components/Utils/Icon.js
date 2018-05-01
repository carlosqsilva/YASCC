import styled from "styled-components"

export const Icon = styled.img.attrs({
  alt: "",
  width: props => props.size,
  height: props => props.size
})`
  align-self: center;
`

export default Icon
