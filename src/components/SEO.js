import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image, siteUrl }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
            keywords
          }
        }
      }
    `
  )

  const defaultImage = site.siteMetadata.siteUrl + site.siteMetadata.image
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || defaultImage
  const url = siteUrl || site.siteMetadata.siteUrl
  const metatitle = title || site.siteMetadata.title


  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* General tags */}
      <meta name="image" content={metaImage} />
      <meta name="description" content={metaDescription} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={metatitle} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={url} />

      <link rel="caninical" href={url}/>

    </Helmet>
  )
}

export default SEO
