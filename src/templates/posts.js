import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
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
  let featuredPost
  let ogImage
console.log(posts[0].node.image.fluid.src, "imagennnnnnnn");
  try {
    featuredPost = posts[0].node
  } catch (error) {
    featuredPost = null
  }
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
            <Card {...featuredPost} featured basePath={basePath} />
            {posts.slice(1).map(({ node: post }, key) => (
              <Card key={key} {...post} basePath={basePath} />
            ))}
          </CardList>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} basePath={basePath} />
            ))}
          </CardList>
        )}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPost(sort: { fields: [publicationDate], order: DESC }) {
      edges {
        node {
          title
          image {
            fluid(quality: 90, maxWidth: 300) {
              src
            }
          }
          body {
            json
          }
          linkAuthorImage {
            json
          }
          publicationDate(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

export default Posts
