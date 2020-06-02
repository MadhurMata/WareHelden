import React from 'react'
import styled from '@emotion/styled'
//require('prismjs/themes/prism.css')

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
    font-family: 'Source Code Pro', cursive;
    font-size: 0.9rem;
    font-weight: 400;
    text-align: justify;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const PageBody = props => {
  return (
    <Body>
      <p>In the end, I was able to use the pain of that moment to look for and heal old pain that was still in me. I started to love myself more, better understand myself and became much more loyal to myself. I have been able to discover how much love I have, how much I want to share this love with the world and do not feel limited anymore to spread my energy around. I have dared to see and express my wishes and dreams. I have learned through pain how much I can trust myself and how incredibly strong I am. And just at that moment, that I felt all this, love came into my life again. Totally unexpected. Overwhelming and confusing. What had come my way felt so right. Despite the fear I chose to let love win. By doing this I learned that true (self-)love does not push your fear away but accepts it, does not judge on it, tries to understand and learn from it. By being able to love this special person so dearly I learn so much about life and myself. It makes me grow every day, which is not always easy, but it is certainly worth it.</p>
      {/*{documentToReactComponents(props.body.json)}*/}
    </Body>
    
  )
}

export default PageBody
