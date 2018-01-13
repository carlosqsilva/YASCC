import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 1900px) 1fr;
  padding: 10px;
  height: 100%;
  overflow-y: scroll;

  @media screen and (min-width: 500px) {
    padding: 15px;
  }
`

class  InfiniteScroll extends React.Component {

  handleScroll = (e) => {
    const {scrollTop, scrollHeight, clientHeight } = e.target
    if ((scrollTop + clientHeight) > (scrollHeight - 40)) {
      this.props.loadMore()
    }
  }

  render() {
    return (
      <Container onScroll={this.handleScroll}>
        {this.props.children}
      </Container>
    )
  }
}

export default InfiniteScroll