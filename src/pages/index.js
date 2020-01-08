/** @jsx jsx */
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Fragment } from 'react'
import { css, jsx, Styled } from 'theme-ui'
import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import SEO from '../components/SEO'

const Hero = styled('section')(
  css({
    alignItems: 'center',
    bg: 'subtle',
    color: 'text',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '80vh',
    position: 'relative',
    px: 3,
  })
)

const HeroImageWrapper = styled('div')(
  css({
    bottom: 0,
    left: 0,
    opacity: 0.2,
    position: 'absolute',
    right: 0,
    top: 0,
    '& > div.gatsby-image-wrapper': { height: '100%', width: '100%' },
  })
)

const Title = styled('h1')(
  css({
    fontFamily: 'heading',
    fontSize: [7, 7, 9],
    fontWeight: 'display',
    lineHeight: 'heading',
    position: 'relative',
    m: 0,
    mb: 2,
    textTransform: 'uppercase',
  })
)

const Subtitle = styled('h2')(
  css({
    fontFamily: 'heading',
    fontSize: [4, 4, 6],
    fontWeight: 'display',
    lineHeight: 'heading',
    m: 0,
    position: 'relative',
  })
)

const Container = styled('div')(
  css({
    maxWidth: 'container.regular',
    mx: 'auto',
    px: 3,
    py: 5,
  })
)

const Heading = props => <Styled.h1 as="h3" {...props} />

const Subheading = ({ children, ...props }) => (
  <Styled.h2 as="h4" sx={{ alignItems: 'center', display: 'flex' }} {...props}>
    <span sx={{ color: 'blue.900' }}>
      <Icon icon="arrowRight" sx={{ mr: 3 }} />
    </span>
    {children}
  </Styled.h2>
)

const Paragraph = Styled.p

const Link = props => <Styled.a rel="noopener noreferrer" {...props} />

const ContentWrapper = styled('div')(
  css({
    borderBottomColor: 'subtle',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    py: 5,
    px: [4, 5, 6],
    '&:last-of-type': {
      borderBottomColor: 'transparent',
    },
  })
)

const IndexPage = ({ data, location, navigate }) => (
  <Fragment>
    <SEO location={location} />
    <main>
      <Hero>
        <HeroImageWrapper>
          <Image fluid={data.praxis.childImageSharp.fluid} alt="" />
        </HeroImageWrapper>
        <Title>Praxis Dichterhof</Title>
        <Subtitle>Organisationsberatung. Supervision. Training.</Subtitle>
      </Hero>

      <section sx={{ bg: 'blue.900', color: 'white' }}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row', 'row'],
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
            <Heading>Prozessbegleitung</Heading>
            <div sx={{ columnCount: [1, 1, 2] }}>
              <Paragraph>
                Meine beraterische Tätigkeit ist auf die Klient*innen
                zugeschnitten, lösungs- und ressourcenorientiert.
              </Paragraph>
              <Paragraph>
                Zentral für mich sind die Wahrnehmung und Reflexion eigener
                Entwicklungen am Arbeitsplatz, um sich wirksam zu organisieren
                und die eigene Rolle zu finden, stets mit einem Blick auf die
                Gesellschaft. Dies gilt für Organisationen ebenso wie für Teams,
                Gruppen und Einzelpersonen.
              </Paragraph>
              <Paragraph>
                Ich arbeite methodenintegrativ, setze meine Schwerpunkte
                allerdings in den Techniken der{' '}
                <Link href="http://www.gddg.at/gddg/methode/gruppendynamik">
                  Gruppendynamik
                </Link>{' '}
                und jenen des{' '}
                <Link href="http://www.psychodrama-austria.at/psychodrama/psychodrama-methode/">
                  Psychodramas
                </Link>
                .
              </Paragraph>
              <Paragraph>
                Als Supervisorin, Coach und Organisationsberaterin arbeite ich
                nach den Grundsätzen des{' '}
                <Link href="https://www.oeagg.at/">
                  ÖAGG (Österreichischer Arbeitskreis für Gruppentherapie und
                  Gruppendynamik)
                </Link>{' '}
                und bin Mitglied der{' '}
                <Link href="https://www.oevs.or.at/mitglieder/mueller-uri-fanny/">
                  ÖVS (Österreichischer Vereinigung für Supervision)
                </Link>
                . Meiner langjährigen Erfahrung als Prozesstrainerin geht der{' '}
                <Link href="https://etut.oeh.ac.at/trainer_innenliste/">
                  TTL (Tutoriumsprojekt Trainer*innen Lehrgang)
                </Link>{' '}
                voraus.
              </Paragraph>
            </div>
          </div>
        </Container>
      </section>

      <section>
        {/* <h3></h3> */}
        <Container>
          <ContentWrapper>
            <Subheading>
              Organisationsberatung und Organisationsentwicklung
            </Subheading>
            <Paragraph>
              Gemeinsam entwickeln wir ein Design, das Vision,
              Organisationsstruktur und -kultur unter Dach und Fach bringt. Das
              reicht von Change-Prozessen, Zukunfsfähigkeit,
              Kooperationsfähigkeit, Teamentwicklung, Klausurbegleitung,
              Strategieentwicklung, Coaching bis hin zu regelmäßiger
              Supervision.
            </Paragraph>
            <Paragraph>
              Meine größten Erfahrungswerte und spannendsten Herausforderungen
              liegen in der Organisierung sozialer Bewegungen, flachen
              Hierarchien oder neuen Organisationsformaten mit kollektiven
              Leitungsideen, aber auch im kurzweiligeren Projektmanagement.
            </Paragraph>
          </ContentWrapper>
          <ContentWrapper>
            <Subheading>Konfliktbearbeitung</Subheading>
            <Paragraph>
              Wir stellen uns die Fragen wem der Konflikt nützt, was die eigenen
              Konflikterfahrungen und -gewohnheiten sind, ob Loslassen und
              Verabschieden an der Reihe sind und wie ein selbstorganisiertes
              Weiterentwickeln möglich ist. Die Idee ist, einen konstruktiven
              Weg aus der Konfliktdynamik herauszufinden, um alle Beteiligten zu
              entlasten und neue Optionen zu entwickeln.
            </Paragraph>
          </ContentWrapper>
          <ContentWrapper>
            <Subheading>Supervision und Coaching</Subheading>
            <Paragraph>
              Hier schaffen wir zusammen einen Raum der Reflexion. Mit dem Fokus
              auf das berufliche Umfeld erarbeiten wir ein klares Verständnis
              von Funktion und Rolle und eröffnen ein Feld für
              Entwicklungschancen. Der Weg zu den eigenen Handlungsmöglichkeiten
              kann im Einzel-, Team- oder Gruppensetting, wie auch im
              Führungskräftecoaching erarbeitet werden.
            </Paragraph>
          </ContentWrapper>
          <ContentWrapper>
            <Subheading>
              Trainings, Sensibilisierungsarbeit und Schreibcoaching
            </Subheading>
            <Paragraph>
              Meiner langjährigen Arbeit in der Rassismusforschung, in
              studentischen Interessensvertretungen und meinem
              gesellschaftspolitischen Engagement zufolge, biete ich auch
              Trainings, die diesen Bereichen nahe sind an. Das geht von
              Workshops zu den Themen Rassismus, Migration und Flucht über
              Kampagnenplanung bis hin zu Schreibcoachings für Studierende.
            </Paragraph>
          </ContentWrapper>
          <ContentWrapper>
            <Subheading>Diversity Zertifikate</Subheading>
            <Paragraph>
              Basierend auf kritischen Diversity Konzepten stelle ich Workshops
              speziell für die Anforderungen der Klient*innen zusammen.
            </Paragraph>
          </ContentWrapper>
        </Container>
      </section>

      <section sx={{ bg: 'subtle' }}>
        <Container>
          <Heading>Settings</Heading>
          <Paragraph>
            Ob für Organisationsberatung, Supervision, Training oder Coaching
            werden wir uns gemeinsame Ziele setzen und Intervalle von einer
            Stunde bis hin zu einem wöchentlichen, monatlichen oder mehrjährigen
            Prozess vereinbaren.
          </Paragraph>
        </Container>
      </section>

      <section sx={{ bg: 'subtle' }}>
        <Container>
          <Heading>Praxis</Heading>
          <Paragraph>So siehts aus bei uns:</Paragraph>
          <div sx={{ display: 'flex' }}>
            {data.praxisFolder.nodes.map((image, i) => (
              <div
                sx={{
                  flex: 1,
                  '& > div.gatsby-image-wrapper': { height: '100%' },
                }}
                key={i}
              >
                <Image fluid={image.childImageSharp.fluid} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <Heading>Kontakt</Heading>
          <Paragraph>
            Wenn Ihr Fragen zu meinem Angebot habt, oder ein Erstgespräch
            wünscht, dann füllt gerne das Kontaktformular aus oder meldet euch
            telefonisch unter 0664-2418950.
          </Paragraph>
          <ContactForm navigate={navigate} />
        </Container>
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
          quality: 100
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
    praxisFolder: allFile(filter: { relativeDirectory: { eq: "praxis" } }) {
      nodes {
        childImageSharp {
          fluid(
            maxWidth: 600
            duotone: { highlight: "#f6f9fc", shadow: "#162020", opacity: 100 }
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
