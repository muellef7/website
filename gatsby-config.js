module.exports = {
  siteMetadata: {
    address: {
      streetAddress: 'Brunnengasse 42',
      postalCode: '1160',
      addressLocality: 'Wien',
      addressCountry: 'AT',
    },
    author: 'Praxis Dichterhof',
    description: 'Praxis Dichterhof',
    email: 'mailto:fanny@mueller-uri.at',
    phone: '+436642418950',
    publishedAt: '2019-12-04',
    siteUrl: process.env.URL || 'https://www.praxis-dichterhof.at',
    title: 'Praxis Dichterhof',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-transformer-sharp',
  ],
}
