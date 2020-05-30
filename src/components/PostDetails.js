import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 0 0 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  display: inline-block;
  font-family: 'Source Code Pro', cursive;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: justify;
  color:  #999999;

`

const PostDetails = props => {
  console.log(props)
  return (
    <Wrapper>
      <Date>{props.date}</Date>
    </Wrapper>
  )
}

export default PostDetails
