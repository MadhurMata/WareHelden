import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js'
import Hero from '../components/Hero'
import PostLinks from '../components/PostLinks'

import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    publicationDate,
  } = data.contentfulPost;

  let image = data.contentfulPost.image

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
      <SEO
        title={title}
        description={data.contentfulPost.mainText}
       image={ogImage}
      />
     
      <Hero title={title} image={image} display={'flex'} justify-content={'center'} date={publicationDate} body={data.contentfulPost.mainText}/>
      <PostLinks previous={previous} next={next} basePath={basePath} />
    </Layout>
  )
}

export const query = graphql`
query($slug: String) {
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
  }
}
`

export default PostTemplate
