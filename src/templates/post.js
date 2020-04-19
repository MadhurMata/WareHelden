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
    slug,
    image,
    mainText,
    publicationDate,
    linkAuthorImage,
  } = data.contentfulPost;

  const defaultImage = data.contentfulDefaultImage.image

  // console.log(slug, "slug");
  // console.log(image);
  // console.log(mainText, "main text");
  // console.log(pageContext, " page context");
  // console.log(linkAuthorImage, " linkAuthorImage");
  // console.log("base pathhhhhhhhhhhh", basePath)

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
        <PageBody body={mainText} />
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
