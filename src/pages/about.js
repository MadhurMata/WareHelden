import React from "react"

import Layout from "../components/layout.js"
import SEO from "../components/SEO"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Container from "../components/Container"

const Wrapper = styled.div`
  float: left;
  width: 40%;
  height: auto;
  box-shadow: 0 2px 10px #aaa;
  border: 1px solid #aaa;
  padding: 1rem 1rem 2rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`

const BgImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: auto;
  border-radius: 10px;
`

const FirstParagraph = styled.div`
  line-height: 1.6;
  font-family: "Source Code Pro", cursive;
  font-size: 0.9rem;
  font-weight: 400;
  font-size: 0.9rem;
  text-align: justify;
  padding-top: 2rem;
  p {
    padding: 0.5rem 0;
  }
  @media (max-width: 480px) {
    display: block;
  }
`

const About = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAbout {
        edges {
          node {
            aboutText {
              json
            }
            image {
              fluid(maxWidth: 900) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout pathUrl={location.pathname}>
      <SEO title="About" />
      <Container>
        <Wrapper>
          <BgImg
            className="about-img"
            fluid={data.allContentfulAbout.edges[0].node.image.fluid}
            alt="Esmee image"
          />
        </Wrapper>
        <FirstParagraph>
          {documentToReactComponents(data.allContentfulAbout.edges[0].node.aboutText.json) }
        </FirstParagraph>
      </Container>
    </Layout>
  )
}

export default About
