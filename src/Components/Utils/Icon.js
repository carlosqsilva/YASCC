import styled from "styled-components";

export const Icon = styled.img.attrs(props => ({
  alt: "",
  width: props.size,
  height: props.size
}))`
  align-self: center;
`;

export const SVGIcon = styled.svg.attrs(props => ({
  width: props => props.size,
  height: props => props.size,
  viewBox: "0 0 24 24"
}))`
  fill: ${props => (props.active ? "#21d4fd" : "#444")};
`;
