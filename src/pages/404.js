import React from "react"

import Layout from "../components/layout.js"
import SEO from '../components/SEO'
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import Container from "../components/Container"


const  NotFoundImg = styled(Img)`
  position: absolute;
  width: 60%;
  height: auto;
`

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
      query {
        notFound: allFile(
          filter: { relativePath: {}, relativeDirectory: { eq: "notFound" } }
        ) {
          nodes {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `)

  return (
    < Layout >
      < SEO title="404" description="Page Not found" />
        <Container>
          <NotFoundImg fluid={data.notFound.nodes[0].childImageSharp.fluid} />
        </Container>
    </Layout>
  )
}

export default NotFoundPage;
