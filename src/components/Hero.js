import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Container from "./Container"

const Wrapper = styled.div`
  float: left;
  width: 40%;
  height: auto;
  box-shadow: 0 2px 10px #aaa;
  border: 1px solid #aaa;
  padding: 1rem 1rem 0;
  margin-right: 2rem;
  border-radius: 10px;
  @media screen and (max-width: ${props => props.theme.responsive.small}) { 
    float: none;
    margin: 0;
    width: 80%;
  }
`

const BgImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: auto;
  border: 1px solid #aaa;
  border-radius: 10px;
`
const Date = styled.p`
  padding-top: 1rem;
  font-family: "Source Code Pro", cursive;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: justify;
  color: #999999;
`

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding: 0.5rem 0 1rem;
  @media screen and (max-width: ${props => props.theme.responsive.small}) { 
    display: block;
  }
`

const FirstParagraph = styled.div`
  line-height: 1.6;
  font-family: 'Source Code Pro',cursive;
  font-size: 0.9rem;
  font-weight: 400;
  font-size: 0.9rem;
  text-align: justify;
  @media screen and (max-width: ${props => props.theme.responsive.small}) { 
    display: block;
  }
  p {
    padding: 0.5rem 0;
  }
`

const Hero = props => (
  <Container>
      <Wrapper>
        <BgImg fluid={props.image.fluid} backgroundColor={"#eeeeee"} />
        <Date>{props.date}</Date>
      </Wrapper>
      <Title>{props.title}</Title>
      <FirstParagraph>{documentToReactComponents(props.body.json)}</FirstParagraph>
  </Container>
)

export default Hero
