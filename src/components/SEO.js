import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { createSchemaOrgMetadata } from '../utils/createSchemaOrgMetadata'

const SEO = ({ location, pageTitle }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        buildTime
        siteMetadata {
          address {
            streetAddress
            postalCode
            addressLocality
            addressCountry
          }
          author
          description
          email
          phone
          publishedAt
          siteUrl
          title
        }
      }
    }
  `)

  const {
    address,
    author,
    description,
    email,
    phone,
    publishedAt,
    siteUrl,
    title,
  } = site.siteMetadata
  const { buildTime } = site
  const canonicalUrl = siteUrl + location.pathname
  const fullTitle = pageTitle ? `${pageTitle} | ${title}` : title

  const { schemaWebpage, schemaWebpageOwner } = createSchemaOrgMetadata({
    address,
    author,
    buildTime,
    canonicalUrl,
    description,
    email,
    lang: 'de',
    phone,
    publishedAt,
    siteUrl,
    title,
  })

  return (
    <Helmet>
      <html lang="de" />
      <title>{fullTitle}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={pageTitle || title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify(schemaWebpageOwner)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaWebpage)}
      </script>
    </Helmet>
  )
}

export default SEO
