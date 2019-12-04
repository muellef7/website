export const createSchemaOrgMetadata = ({
  address,
  author,
  buildTime,
  canonicalUrl,
  description,
  email,
  lang,
  phone,
  publishedAt,
  siteUrl,
  title,
}) => {
  const createId = id => `${siteUrl}/#${id}`

  const schemaWebpageOwnerId = createId('praxis-dichterhof')

  const schemaWebpageOwner = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    '@id': schemaWebpageOwnerId,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    description,
    email,
    name: author,
    telephone: phone,
    url: siteUrl,
  }

  const schemaWebpage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    author: {
      '@id': schemaWebpageOwnerId,
    },
    copyrightHolder: {
      '@id': schemaWebpageOwnerId,
    },
    copyrightYear: '2019',
    creator: {
      '@id': schemaWebpageOwnerId,
    },
    dateModified: buildTime,
    datePublished: publishedAt,
    description,
    headline: title,
    inLanguage: lang,
    name: title,
    mainEntityOfPage: canonicalUrl,
    publisher: {
      '@id': schemaWebpageOwnerId,
    },
    url: siteUrl,
  }

  return {
    schemaWebpage,
    schemaWebpageOwner,
  }
}
