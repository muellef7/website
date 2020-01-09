/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Styled } from 'theme-ui'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const ContactPage = ({ location, navigate }) => (
  <Fragment>
    <SEO location={location} pageTitle="Kontakt" />
    <main
      sx={{
        maxWidth: 'container.regular',
        mx: 'auto',
        px: 3,
        py: 5,
      }}
    >
      <Styled.h1>Kontakt</Styled.h1>
      <Styled.p>
        Wenn Ihr Fragen zu meinem Angebot habt, oder ein Erstgespräch wünscht,
        dann füllt gerne das Kontaktformular aus oder meldet euch telefonisch
        unter 0664&nbsp;-&nbsp;2418950.
      </Styled.p>
      <ContactForm navigate={navigate} />
    </main>
  </Fragment>
)

export default ContactPage
