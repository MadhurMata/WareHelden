import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 1em 1.5em 1em;
  flex-grow: 1;
   margin-bottom: 2rem;
  @media screen and (max-width: ${props => props.theme.responsive.small}) { 
    text-align: -webkit-center;
    margin-bottom: 0;
    padding-bottom: 2rem;
  }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
