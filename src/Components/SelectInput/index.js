import { h } from "preact"
import styled from "styled-components"
import arrow from "./arrow.svg"

const Select = styled.select`
  appearance: none;
  background: transparent url(${arrow}) no-repeat 82% 50%;
  color: whitesmoke;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  align-self: center;
  margin-left: 20px;
  flex: 1;
  outline: 0;
  border: 0;
`

const Option = styled.option`
  color: whitesmoke;
  background: #242526;
`

const SelectInput = ({ options, ...props }) => (
  <Select {...props}>
    {options.map((_, i) => (
      <Option key={i} value={_.value}>
        {_.label}
      </Option>
    ))}
  </Select>
)

export default SelectInput
