import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Container from "./Container"

const Div = styled.div`
  font-family: 'Source Code Pro',cursive;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 2rem 0 3rem;
  @media screen and (max-width: 480px) {
    margin: 0 2%;
  }
  `

const Wrapper = styled.div`
  float: left;
  width: 40%;
  height: auto;
  box-shadow: 0 2px 10px #aaa;
  border: 1px solid #aaa;
  padding: 1rem 1rem 1rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  @media screen and (max-width: ${props => props.theme.responsive.small}) { 
    float: none;
    margin: 0;
    width: 80%;
    margin-bottom: 1rem;
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
  font-size: 1.5rem;
  text-align: center;
  padding: 0.5rem 0 1rem;
  @media screen and (max-width: ${props => props.theme.responsive.small}) { 
    display: block;
  }
`

const FirstParagraph = styled.p`
  line-height: 1.6;   
  font-family: 'Source Code Pro',cursive;
  font-size: 0.9rem;
  font-weight: 400;
  font-size: 0.9rem;
  text-align: justify;
  @media screen and (max-width: ${props => props.theme.responsive.small}) { 
    display: block;
  }
`

const Hero = props => (
  <Container>
      <Wrapper /*height={props.height}*/>
        <BgImg fluid={props.image.fluid} backgroundColor={"#eeeeee"} />
        <Date>{props.date}</Date>
      </Wrapper>
      <Title>{props.title}</Title>
      <FirstParagraph>{documentToReactComponents(props.body.json)}</FirstParagraph>
  </Container>
)

export default Hero
