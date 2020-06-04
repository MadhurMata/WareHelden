import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import "../styles/Buttons.scss"

const Wrapper = styled.div`
  margin: -2em 0 0 0;
  padding: 0 1.5em 2em;
`

const Box = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width:   max-width: ${props => props.theme.sizes.maxWidth};
  }
`

const PostLinks = props => {
  console.log('props.previous', props.previous)
  const justifyRight = props.previous ? "space-between" : "flex-end";
  console.log('justifyRight', justifyRight);
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <Link className="btn btn--stripe" style={{ float: "left" }} to={`blog/${props.basePath}/${props.previous.slug}/`}>
            &#8592; Prev
          </Link>
        )}
        {props.next && (
          <Link className="btn btn--stripe" style={{ float: "right" }} to={`blog/${props.basePath}/${props.next.slug}/`}>
            Next &#8594;
          </Link>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
