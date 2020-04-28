module.exports = {
  siteMetadata: {
    title: `Ware Helden`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: 'https://gcn.netlify.com',
    image: '/images/share.jpg',
    postsPerFirstPage: 4,
    postsPerPage: 6,
    basePath: '/',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "5q1jvtkyacbn",
        accessToken: "l8Wc9yapVmnoMoBCbeC9ymenEVHWIv3x217PUPkBy6s",
      },
    },
    `gatsby-plugin-emotion`,
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/icons/facebook.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     // CommonMark mode (default: true)
    //     commonmark: true,
    //     // Footnotes mode (default: true)
    //     footnotes: true,
    //     // Pedantic mode (default: true)
    //     pedantic: true,
    //     // GitHub Flavored Markdown mode (default: true)
    //     gfm: true,
    //     // Plugins configs
    //     plugins: [],
    //   },
    // },
  ],
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

}
