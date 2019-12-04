/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Styled } from 'theme-ui'

const Header = () => (
  <header
    sx={{
      borderBottomColor: 'subtle',
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
    }}
  >
    <div
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: ['center', 'center', 'flex-end'],
        maxWidth: 'container.regular',
        mx: 'auto',
      }}
    >
      {/* <nav>
        <Styled.a
          as={Link}
          sx={{ color: 'text', fontWeight: 'bold', px: 4 }}
          to="/"
        >
          Praxis Dichterhof
        </Styled.a>
      </nav> */}
      <nav>
        <ul
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            listStyle: 'none',
            m: 0,
            p: 0,
          }}
        >
          <li sx={{ mx: 3, py: 4 }}>
            <Styled.a
              as={Link}
              sx={{ color: 'text', fontWeight: 'bold' }}
              to="/"
            >
              Home
            </Styled.a>
          </li>
          <li sx={{ mx: 3, py: 4 }}>
            <Styled.a
              as={Link}
              sx={{ color: 'text', fontWeight: 'bold' }}
              to="/contact"
            >
              Kontakt
            </Styled.a>
          </li>
          <li sx={{ mx: 3, py: 4 }}>
            <Styled.a
              as={Link}
              sx={{ color: 'text', fontWeight: 'bold' }}
              to="/about"
            >
              Impressum
            </Styled.a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
