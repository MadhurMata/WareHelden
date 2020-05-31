module.exports.data = {
  posts: `{
    allContentfulPost(sort: { fields: [publicationDate], order: DESC })  {
      edges {
        node {
          title
          slug
          publicationDate(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }`,
}