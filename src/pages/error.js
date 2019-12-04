/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Styled } from 'theme-ui'
import SEO from '../components/SEO'

const ErrorPage = ({ location }) => (
  <Fragment>
    <SEO location={location} pageTitle="Fehler" />
    <main
      sx={{
        maxWidth: 'container.regular',
        mx: 'auto',
        px: 3,
        py: 5,
      }}
    >
      <Styled.h1 as="h1" sx={{ mb: 6 }}>
        Oh nein!
      </Styled.h1>
      <Styled.p>Irgendetwas ist leider schief gelaufen.</Styled.p>
    </main>
  </Fragment>
)

export default ErrorPage
