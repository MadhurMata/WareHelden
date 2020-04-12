module.exports.data = {
  posts: `{
    allContentfulPost(sort: { fields: [publicationDate], order: DESC }) {
      edges {
        node {
          slug
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
  }`,
}