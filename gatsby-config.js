module.exports = {
  siteMetadata: {
    title: `Ware Helden`,
    description: `Description`,
    author: `Madhur Mata`,
    siteUrl: 'https://awesome-torvalds-e5d2af.netlify.app/',
    image: '/images/share.jpg',
    postsPerFirstPage: 4,
    postsPerPage: 6,
    basePath: '/',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Amatic SC`,
            variants: [`400`, `700`, `900`]
          },
          {
            family: `Source Code Pro`,
            variants: [`400`,`550`, `700`, `900`]
          },
        ],
      },
    }
  ],
}
