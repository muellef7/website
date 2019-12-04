/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Styled } from 'theme-ui'
import SEO from '../components/SEO'

const SuccessPage = ({ location }) => (
  <Fragment>
    <SEO location={location} pageTitle="Nachricht erfolgreich gesendet" />
    <main
      sx={{
        maxWidth: 'container.regular',
        mx: 'auto',
        px: 3,
        py: 5,
      }}
    >
      <Styled.h1 as="h1" sx={{ mb: 6 }}>
        Danke!
      </Styled.h1>
      <Styled.p>
        Danke für die Nachricht! Ich melde mich so bald wie möglich!
      </Styled.p>
    </main>
  </Fragment>
)

export default SuccessPage
