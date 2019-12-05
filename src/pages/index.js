/** @jsx jsx */
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Fragment } from 'react'
import { jsx, Styled } from 'theme-ui'
import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import SEO from '../components/SEO'

const IndexPage = ({ data, location, navigate }) => (
  <Fragment>
    <SEO location={location} />
    <main>
      <section
        sx={{
          alignItems: 'center',
          bg: 'subtle',
          color: 'text',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '80vh',
          position: 'relative',
          px: 3,
        }}
      >
        <div
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.2,
            '& > div.gatsby-image-wrapper': { height: '100%', width: '100%' },
          }}
        >
          <Image fluid={data.praxis.childImageSharp.fluid} alt="" />
        </div>
        <h1
          sx={{
            fontFamily: 'heading',
            fontSize: [7, 7, 9],
            fontWeight: 'display',
            lineHeight: 'heading',
            position: 'relative',
            m: 0,
            mb: 2,
            textTransform: 'uppercase',
          }}
        >
          Praxis Dichterhof
        </h1>
        <h2
          sx={{
            fontFamily: 'heading',
            fontSize: [4, 4, 6],
            fontWeight: 'display',
            lineHeight: 'heading',
            m: 0,
            position: 'relative',
          }}
        >
          Organisationsberatung. Supervision. Training.
        </h2>
      </section>

      <section
        sx={{
          bg: 'green.1000',
          color: 'white',
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row', 'row'],
            maxWidth: 'container.regular',
            mx: 'auto',
            px: 3,
            py: 5,
          }}
        >
          <div
            sx={{
              alignSelf: ['flex-start', 'center', 'center'],
              mr: [0, 3, 5],
            }}
          >
            <div>
              <Image
                alt="Fanny Müller-Uri"
                fixed={data.fanny.childImageSharp.fixed}
                sx={{ borderRadius: 3 }}
              />
            </div>
            <strong>Fanny Müller-Uri</strong>
          </div>
          <div>
            <Styled.h1 as="h3">Meine Prozessbegleitung</Styled.h1>
            <div sx={{ columnCount: [1, 1, 2] }}>
              <Styled.p>
                Meine beraterische Tätigkeit ist auf die Klient*innen
                zugeschnitten, lösungs- und ressourcenorientiert.
              </Styled.p>
              <Styled.p>
                Zentral für mich sind die Wahrnehmung und Reflexion eigener
                Entwicklungen am Arbeitsplatz, um sich wirksam zu organisieren
                und die eigene Rolle zu finden, stets mit einem Blick auf die
                Gesellschaft. Dies gilt für Organisationen ebenso wie für Teams,
                Gruppen und Einzelpersonen.
              </Styled.p>
              <Styled.p>
                Ich arbeite methodenintegrativ, setze meine Schwerpunkte
                allerdings in den Techniken der{' '}
                <Styled.a
                  href="http://www.gddg.at/gddg/methode/gruppendynamik"
                  rel="noopener noreferrer"
                >
                  Gruppendynamik
                </Styled.a>{' '}
                und jenen des{' '}
                <Styled.a
                  href="http://www.psychodrama-austria.at/psychodrama/psychodrama-methode/"
                  rel="noopener noreferrer"
                >
                  Psychodramas
                </Styled.a>
                .
              </Styled.p>
              <Styled.p>
                Als Supervisorin, Coach und Organisationsberaterin arbeite ich
                nach den Grundsätzen des{' '}
                <Styled.a href="https://www.oeagg.at/">
                  ÖAGG (Österreichischer Arbeitskreis für Gruppentherapie und
                  Gruppendynamik)
                </Styled.a>{' '}
                und bin Mitglied der{' '}
                <Styled.a href="https://www.oevs.or.at/mitglieder/mueller-uri-fanny/">
                  ÖVS (Österreichischer Vereinigung für Supervision)
                </Styled.a>
                . Meiner langjährigen Erfahrung als Prozesstrainerin geht der{' '}
                <Styled.a href="https://etut.oeh.ac.at/trainer_innenliste/">
                  TTL (Tutoriumsprojekt Trainer*innen Lehrgang)
                </Styled.a>{' '}
                voraus.
              </Styled.p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* <h3></h3> */}
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            maxWidth: 'container.regular',
            mx: 'auto',
          }}
        >
          <div
            sx={{
              borderBottomColor: 'subtle',
              borderBottomStyle: 'solid',
              borderBottomWidth: 2,
              py: [5, 5, 6],
              px: [4, 5, 6],
              position: 'relative',
              '&::before': {
                position: 'absolute',
                width: '100vw',
                content: '""',
                height: '100%',
                bg: 'inherit',
                top: 0,
                right: '100%',
              },
              '&::after': {
                position: 'absolute',
                width: '100vw',
                content: '""',
                height: '100%',
                bg: 'inherit',
                top: 0,
                left: '100%',
                display: 'none',
              },
            }}
          >
            <Styled.h2 as="h4" sx={{ display: 'flex', alignItems: 'center' }}>
              <span sx={{ color: 'primary' }}>
                <Icon icon="arrowRight" sx={{ mr: 3 }} />
              </span>
              Organisationsberatung und Organisationsentwicklung
            </Styled.h2>
            <Styled.p>
              Gemeinsam entwickeln wir ein Design, das Vision,
              Organisationsstruktur und -kultur unter Dach und Fach bringt. Das
              reicht von Change-Prozessen, Zukunfsfähigkeit,
              Kooperationsfähigkeit, Teamentwicklung, Klausurbegleitung,
              Strategieentwicklung, Coaching bis hin zu regelmäßiger
              Supervision.
            </Styled.p>
            <Styled.p>
              Meine größten Erfahrungswerte und spannendsten Herausforderungen
              liegen in der Organisierung sozialer Bewegungen, flachen
              Hierarchien oder neuen Organisationsformaten mit kollektiven
              Leitungsideen, aber auch im kurzweiligeren Projektmanagement.
            </Styled.p>
          </div>
          <div
            sx={{
              borderBottomColor: 'subtle',
              borderBottomStyle: 'solid',
              borderBottomWidth: 2,
              py: [5, 5, 6],
              px: [4, 5, 6],
              position: 'relative',
              '&::before': {
                position: 'absolute',
                width: '100vw',
                content: '""',
                height: '100%',
                bg: 'inherit',
                top: 0,
                right: '100%',
                display: 'none',
              },
              '&::after': {
                position: 'absolute',
                width: '100vw',
                content: '""',
                height: '100%',
                bg: 'inherit',
                top: 0,
                left: '100%',
              },
            }}
          >
            <Styled.h2 as="h4" sx={{ display: 'flex', alignItems: 'center' }}>
              <span sx={{ color: 'primary' }}>
                <Icon icon="arrowRight" sx={{ mr: 3 }} />
              </span>
              Konfliktbearbeitung
            </Styled.h2>
            <Styled.p>
              Wir stellen uns die Fragen wem der Konflikt nützt, was die eigenen
              Konflikterfahrungen und -gewohnheiten sind, ob Loslassen und
              Verabschieden an der Reihe sind und wie ein selbstorganisiertes
              Weiterentwickeln möglich ist. Die Idee ist, einen konstruktiven
              Weg aus der Konfliktdynamik herauszufinden, um alle Beteiligten zu
              entlasten und neue Optionen zu entwickeln.
            </Styled.p>
          </div>
          <div
            sx={{
              borderBottomColor: 'subtle',
              borderBottomStyle: 'solid',
              borderBottomWidth: 2,
              py: [5, 5, 6],
              px: [4, 5, 6],
              position: 'relative',
              '&::before': {
                position: 'absolute',
                width: '100vw',
                content: '""',
                height: '100%',
                bg: 'inherit',
                top: 0,
                right: '100%',
              },
              '&::after': {
                position: 'absolute',
                width: '100vw',
                content: '""',
                height: '100%',
                bg: 'inherit',
                top: 0,
                left: '100%',
                display: 'none',
              },
            }}
          >
            <Styled.h2 as="h4" sx={{ display: 'flex', alignItems: 'center' }}>
              <span sx={{ color: 'primary' }}>
                <Icon icon="arrowRight" sx={{ mr: 3 }} />
              </span>
              Supervision und Coaching
            </Styled.h2>
            <Styled.p>
              Hier schaffen wir zusammen einen Raum der Reflexion. Mit dem Fokus
              auf das berufliche Umfeld erarbeiten wir ein klares Verständnis
              von Funktion und Rolle und eröffnen ein Feld für
              Entwicklungschancen. Der Weg zu den eigenen Handlungsmöglichkeiten
              kann im Einzel-, Team- oder Gruppensetting, wie auch im
              Führungskräftecoaching erarbeitet werden.
            </Styled.p>
          </div>
          <div
            sx={{
              borderBottomColor: 'subtle',
              borderBottomStyle: 'solid',
              borderBottomWidth: 2,
              py: [5, 5, 6],
              px: [4, 5, 6],
              position: 'relative',
              '&::before': {
                position: 'absolute',
                width: '100vw',
                content: '""',
                height: '100%',
                bg: 'inherit',
                top: 0,
                right: '100%',
                display: 'none',
              },
              '&::after': {
                position: 'absolute',
                width: '100vw',
                content: '""',
                height: '100%',
                bg: 'inherit',
                top: 0,
                left: '100%',
              },
            }}
          >
            <Styled.h2 as="h4" sx={{ display: 'flex', alignItems: 'center' }}>
              <span sx={{ color: 'primary' }}>
                <Icon icon="arrowRight" sx={{ mr: 3 }} />
              </span>
              Trainings, Sensibilisierungsarbeit und Schreibcoaching
            </Styled.h2>
            <Styled.p>
              Meiner langjährigen Arbeit in der Rassismusforschung, in
              studentischen Interessensvertretungen und meinem
              gesellschaftspolitischen Engagement zufolge, biete ich auch
              Trainings, die diesen Bereichen nahe sind an. Das geht von
              Workshops zu den Themen Rassismus, Migration und Flucht über
              Kampagnenplanung bis hin zu Schreibcoachings für Studierende.
            </Styled.p>
          </div>
          <div
            sx={{
              py: [5, 5, 6],
              px: [4, 5, 6],
              position: 'relative',
              '&::before': {
                position: 'absolute',
                width: '100vw',
                content: '""',
                height: '100%',
                bg: 'inherit',
                top: 0,
                right: '100%',
                display: 'none',
              },
              '&::after': {
                position: 'absolute',
                width: '100vw',
                content: '""',
                height: '100%',
                bg: 'inherit',
                top: 0,
                left: '100%',
              },
            }}
          >
            <Styled.h2 as="h4" sx={{ display: 'flex', alignItems: 'center' }}>
              <span sx={{ color: 'primary' }}>
                <Icon icon="arrowRight" sx={{ mr: 3 }} />
              </span>
              Diversity Zertifikate
            </Styled.h2>
            <Styled.p>
              Basierend auf kritischen Diversity Konzepten stelle ich Workshops
              speziell für die Anforderungen der Klient*innen zusammen.
            </Styled.p>
          </div>
        </div>
      </section>

      <section
        sx={{
          bg: 'subtle',
        }}
      >
        <div
          sx={{
            maxWidth: 'container.regular',
            mx: 'auto',
            px: 3,
            py: 5,
          }}
        >
          <Styled.h1 as="h3">Settings</Styled.h1>
          <Styled.p>
            Ob für Organisationsberatung, Supervision, Training oder Coaching
            werden wir uns gemeinsame Ziele setzen und Intervalle von einer
            Stunde bis hin zu einem wöchentlichen, monatlichen oder mehrjährigen
            Prozess vereinbaren.
          </Styled.p>
        </div>
      </section>

      <section>
        <div
          sx={{
            maxWidth: 'container.regular',
            mx: 'auto',
            px: 3,
            py: 5,
          }}
        >
          <Styled.h1 as="h3">Kontakt</Styled.h1>
          <Styled.p>
            Wenn Ihr Fragen zu meinem Angebot habt, oder ein Erstgespräch
            wünscht, dann füllt gerne das Kontaktformular aus oder meldet euch
            telefonisch unter 0664-2418950.
          </Styled.p>
          <ContactForm navigate={navigate} />
        </div>
      </section>
    </main>
  </Fragment>
)

export default IndexPage

export const query = graphql`
  query {
    fanny: file(name: { eq: "fanny" }) {
      childImageSharp {
        fixed(
          width: 200
          duotone: { highlight: "#ffffff", shadow: "#002838", opacity: 100 }
        ) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    praxis: file(name: { eq: "praxis" }) {
      childImageSharp {
        fluid(
          maxWidth: 1600
          duotone: { highlight: "#f6f9fc", shadow: "#162020", opacity: 100 }
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
