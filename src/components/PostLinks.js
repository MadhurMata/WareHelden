import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import "../styles/Buttons.scss"

const Wrapper = styled.div`
  margin: -2em 0 0 0;
  padding: 0 1.5em 2em;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width:   max-width: ${props => props.theme.sizes.maxWidth};
  }
`

const PostLinks = props => {
  console.log("postLinks", props)
  console.log("nextttttt", props.next)
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <Link className="btn btn--stripe"  to={`${props.basePath}/${props.previous.title}/`}>
            &#8592; Prev
          </Link>
        )}
        {props.next && (
          <Link className="btn btn--stripe" to={`${props.basePath}/${props.next.title}/`}>
            Next &#8594;
          </Link>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
