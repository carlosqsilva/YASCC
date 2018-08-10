import styled from "styled-components"

const TimeBar = styled.input.attrs({
  type: "range",
  value: "0"
})`
  appearance: none;
  margin: 0.5rem 0;
  outline: none;
  width: 100%;
  height: 6px;
  align-self: center;
  background-color: var(--rangerTrack);
  background-image: linear-gradient(var(--info), var(--info));
  background-size: ${props => (props.full ? "100% 100%" : "0% 100%")};
  background-repeat: no-repeat;
  border-radius: 10px;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    box-shadow: none;
    border: none;
    background: transparent;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    border: 0;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.1);
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border: 0;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.1);
  }
`

export default TimeBar
