module.exports.data = {
  posts: `{
    allContentfulPost(sort: { fields: [publicationDate], order: DESC }) {
      edges {
        node {
          slug
          title
          publicationDate(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }`,
  default: `{
    allContentfulDefaultImage {
      edges {
        node {
          image {
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }     
      }
    }  
  }`,
}