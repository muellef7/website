/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Styled } from 'theme-ui'
import SEO from '../components/SEO'

const NotFoundPage = ({ location }) => (
  <Fragment>
    <SEO location={location} pageTitle="Not Found" />
    <main
      sx={{
        maxWidth: 'container.regular',
        mx: 'auto',
        px: 3,
        py: 5,
      }}
    >
      <Styled.h1 as="h1" sx={{ mb: 6 }}>
        Huch!
      </Styled.h1>
      <Styled.p>Diese Seite existiert leider nicht.</Styled.p>
    </main>
  </Fragment>
)

export default NotFoundPage
