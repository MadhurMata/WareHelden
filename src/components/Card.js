import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Truncate from 'react-truncate';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Post = styled.li`
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 10px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const StyledImg = styled(Img)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const Title = styled.h2`
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
  font-family: 'Amatic SC', cursive;
  font-size: 1.5rem;
  font-weight: 700;
`

const Date = styled.h4`
  margin: 0 1rem 0.5rem 1rem;
  color: gray;
`

const ReadingTime = styled.p`
  margin: 0 1rem 1.5rem 1rem;
  padding-bottom: 1rem;
  span {
     color: #121212;
    font-family: 'Source Code Pro', cursive;
    font-size: 1.1rem;
    font-weight: 400;
    font-variant: all-petite-caps;
  }
`
const Card = ({ slug, image, title, truncateOptions, publicationDate, mainText, ...props }) => {

  return (
    <>
      {image && mainText && truncateOptions && title && mainText && (
        <Post featured={props.featured}>
          <Link to={`${props.basePath}/blog/${slug}/`}>
            <StyledImg
              key={slug}
              fluid={image.fluid}
              imgStyle={{ objectPosition: 'top' }}
              backgroundColor={'#eeeeee'} />
            <Title>{title}</Title>
            <Date>{publicationDate}</Date>
            <ReadingTime>
              <Truncate
                lines={truncateOptions.lines}
                width={truncateOptions.width}
                ellipsis='&hellip;'
              >
                  {documentToReactComponents(mainText.json)}
              </Truncate>
            </ReadingTime>
          </Link>
        </Post>
      )}
    </>
  )
}

export default Card
