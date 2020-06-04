import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import { startCase } from 'lodash'

const Posts = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const { humanPageNumber, basePath } = pageContext

  const isFirstPage = humanPageNumber === 1

  const truncateOptions = {
    hero: {
      lines: 1,
      width: 3000
    },
    cardList: {
      lines: 1,
      width: 2000
    }
  }

  let featuredPost
  try {
    featuredPost = posts[0].node
  } catch (error) {
    featuredPost = null
  }

  let ogImage
  try {
    ogImage = posts[0].node.image.fluid.src 
  } catch (error) {
    ogImage = null
  }

  return (
    <Layout>
      <SEO title={startCase(basePath)} image={ogImage} />
      <Container>
        {isFirstPage ? (
          <CardList>
            <Card {...featuredPost} truncateOptions={truncateOptions.hero} featured basePath={basePath} />
            {posts.slice(1).map(({ node: post }, key) => (
              <Card key={key} truncateOptions={truncateOptions.cardList} {...post} basePath={basePath} />
            ))}
          </CardList>
        ) : (
          <CardList>
            {posts.map(({ node: post }, key) => (
              <Card key={key} truncateOptions={truncateOptions.cardList} {...post} basePath={basePath} />
            ))}
          </CardList>
        )}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
query($skip: Int!, $limit: Int!) {
  allContentfulPost(
    sort: { fields: [publicationDate], order: DESC }
    limit: $limit
    skip: $skip
    ) {
      edges {
      node {
        slug
        title
        publicationDate(formatString: "MMMM DD, YYYY")
        image {
          fluid(maxWidth: 1800) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        mainText {
          json
        }
      }
    }
  }
}
`

export default Posts

