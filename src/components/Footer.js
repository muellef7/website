/** @jsx jsx */
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa'
import { jsx, Styled } from 'theme-ui'

const Footer = () => (
  <footer
    sx={{
      bg: 'blue.900',
      color: 'white',
    }}
  >
    <div
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: ['column', 'column', 'row'],
        justifyContent: 'space-between',
        maxWidth: 'container.regular',
        mx: 'auto',
        px: 3,
        py: 5,
      }}
    >
      <div sx={{ display: 'flex', alignItems: 'center' }}>
        <FaPhone sx={{ mr: 2 }} />
        <strong sx={{ mr: 2 }}>Telefon</strong>
        <Styled.a
          sx={{
            color: 'white',
            lineHeight: 'large',
            '&:hover': { color: 'grey.500' },
          }}
          href="tel:+436642418950"
          rel="noopener noreferrer"
        >
          0664-2418950
        </Styled.a>
      </div>
      <div sx={{ display: 'flex', alignItems: 'center' }}>
        <FaMapMarker sx={{ mr: 2 }} />
        <strong sx={{ mr: 2 }}>Adresse</strong>
        <Styled.a
          sx={{
            color: 'white',
            lineHeight: 'large',
            '&:hover': { color: 'grey.500' },
          }}
          href="https://www.google.at/maps/place/Brunnengasse+42,+1160+Wien/@48.2101188,16.3337701,17z/"
          rel="noopener noreferrer"
        >
          Brunnengasse 42, 1160 Wien
        </Styled.a>
      </div>
      <div sx={{ display: 'flex', alignItems: 'center' }}>
        <FaEnvelope sx={{ mr: 2 }} />
        <strong sx={{ mr: 2 }}>Email</strong>
        <Styled.a
          sx={{
            color: 'white',
            lineHeight: 'large',
            '&:hover': { color: 'grey.500' },
          }}
          href="mailto:fanny@mueller-uri.at"
          rel="noopener noreferrer"
        >
          fanny@mueller-uri.at
        </Styled.a>
      </div>
    </div>
  </footer>
)

export default Footer
