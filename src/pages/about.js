/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Styled } from 'theme-ui'
import SEO from '../components/SEO'

const AboutPage = ({ location }) => (
  <Fragment>
    <SEO location={location} pageTitle="Impressum und Datenschutz" />
    <main
      sx={{
        maxWidth: 'container.regular',
        mx: 'auto',
        px: 3,
        py: 5,
      }}
    >
      <Styled.h1 as="h1">Impressum und Datenschutz</Styled.h1>
      <section
        sx={{
          mb: 6,
        }}
      >
        <Styled.h2 as="h2">Impressum</Styled.h2>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 3,
            lineHeight: 'large',
          }}
        >
          <span>Praxis Dichterhof e.U.</span>
          <span>Fanny Müller-Uri</span>
          <span>Brunnengasse 42</span>
          <span>1160 Wien</span>
        </div>
      </section>
      <section>
        <Styled.h2 as="h2">Datenschutz</Styled.h2>
        <Styled.h3 as="h3">Grundlegendes</Styled.h3>
        <Styled.p>
          Diese Datenschutzerklärung soll die Nutzer_innen dieser Website über
          die Art, den Umfang und den Zweck der Erhebung und Verwendung
          personenbezogener Daten durch die Websitebetreiberin informieren. Die
          Websitebetreiberin behandelt Ihre personenbezogenen Daten vertraulich
          und entsprechend der gesetzlichen Vorschriften. Definitionen der
          verwendeten Begriffe (z.B. “personenbezogene Daten” oder
          “Verarbeitung”) finden Sie in Art. 4 DSGVO.
        </Styled.p>
        <Styled.h3 as="h3">Umgang mit Kontaktdaten</Styled.h3>
        <Styled.p>
          Nehmen Sie mit mir als Websitebetreiberin durch die angegebene
          Kontaktmöglichkeit Verbindung auf, werden Ihre Angaben gespeichert,
          damit auf diese zur Bearbeitung und Beantwortung Ihrer Anfrage
          zurückgegriffen werden kann. Ohne Ihre Einwilligung werden diese Daten
          nicht an Dritte weitergegeben. Wenn Sie eine Berichtigung, Sperrung,
          Löschung oder Auskunft über die zu Ihrer Person gespeicherten
          personenbezogenen Daten wünschen oder Fragen bzgl. der Erhebung,
          Verarbeitung oder Verwendung Ihrer personenbezogenen Daten haben oder
          erteilte Einwilligungen widerrufen möchten, wenden Sie sich bitte an
          folgende E-Mail-Adresse:{' '}
          <Styled.a
            href="mailto:fanny@mueller-uri.at"
            rel="noopener noreferrer"
          >
            fanny@mueller-uri.at
          </Styled.a>
          .
        </Styled.p>
        <Styled.h3 as="h3">Zugriffsdaten</Styled.h3>
        <Styled.p>
          Wir, die Websitebetreiberin bzw. Seitenprovider, erheben aufgrund
          unseres berechtigten Interesses (s. Art. 6 Abs. 1 lit. f. DSGVO) Daten
          über Zugriffe auf die Website und speichern diese als
          „Server-Logfiles“ auf dem Server der Website ab. Folgende Daten werden
          so protokolliert: Besuchte Website, Uhrzeit zum Zeitpunkt des
          Zugriffes, Menge der gesendeten Daten in Byte, Quelle/Verweis, von
          welchem Sie auf die Seite gelangten, verwendeter Browser, verwendetes
          Betriebssystem.
        </Styled.p>
      </section>
    </main>
  </Fragment>
)

export default AboutPage
