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
  pages: `{
    allContentfulPage {
      edges {
        node {
          slug
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