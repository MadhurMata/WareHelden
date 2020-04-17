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
}