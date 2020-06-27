import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import "../styles/Buttons.scss"

const Wrapper = styled.div`
  margin: 0 auto 2.5rem;
  width: 100%;
  max-width: 1050px;
  padding: 0 1.5em 1em;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const Box = styled.div`
  margin: 0 auto;
  width: 100%;
  }
`

const PostLinks = props => {
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
