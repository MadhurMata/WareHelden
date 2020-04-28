import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'

import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    mainText,
    publicationDate,
  } = data.contentfulPost;

  let image = data.contentfulPost.image
  const defaultImage = data.contentfulDefaultImage.image

  const previous = pageContext.prev
  const next = pageContext.next
  const { basePath } = pageContext

   image = image ? image : defaultImage


  let ogImage
  try {
    ogImage = image.fluid.src
  } catch (error) {
    ogImage = null
  }
  return (
    <Layout>
      <SEO
        title={title}
        description={data.contentfulPost.mainText}
       image={ogImage}
      />
     
      <Hero title={title} image={image} height={'50vh'} />
      <Container>
        <PostDetails
          date={publicationDate}
        />
        <PageBody body={data.contentfulPost.mainText} />
      </Container>
      <PostLinks previous={previous} next={next} basePath={basePath} />
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  contentfulPost(slug: { eq: $slug }) {
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
    linkAuthorImage {
      json
    }
  }
  contentfulDefaultImage {
    image {
      fluid(maxWidth: 1800) {
        ...GatsbyContentfulFluid_withWebp_noBase64
        src
      }
    }
  }        
}
`

export default PostTemplate
