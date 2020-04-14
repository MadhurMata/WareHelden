import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'

//import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    metaDescription,
    image,
    body,
    publicationDate,
    markdownRemark,
    file
  } = data.contentfulPost
  console.log(metaDescription);
  console.log(image);
  console.log(body);
  console.log(file);
  console.log(markdownRemark);
  const previous = pageContext.prev
  const next = pageContext.next
  const { basePath } = pageContext

  let ogImage
  try {
    ogImage = image.fluid.src
  } catch (error) {
    ogImage = null
  }
  return (
    <Layout>
      {/* <SEO
        title={title}
        description={
          metaDescription
            ? metaDescription.internal.content
            : body.childMarkdownRemark.excerpt
        }
       image={ogImage}
      /> */}
     
      <Hero title={title} image={image} height={'50vh'} />
      <Container>
        <PostDetails
          date={publicationDate}
         // timeToRead={body.childMarkdownRemark.timeToRead}
        />
        <PageBody body={body} />
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
    publicationDate
    image {
      fluid(quality: 90, maxWidth: 300) {
        src
      }
    }
    mainText {
      json
    }
    linkAuthorImage {
      json
    }
  }
}
`

export default PostTemplate
