import { h } from "preact"
import styled from "styled-components"

import InputRange from "./InputRange"

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 0 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export default ({ title, duration, ...props }) => (
  <Wrapper>
    <Container>
      <span>{title}</span>
      <span>{duration}</span>
    </Container>
    <InputRange step="0.1" {...props} />
  </Wrapper>
)
