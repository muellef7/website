/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Styled } from 'theme-ui'

const NavLink = props => (
  <Styled.a
    as={Link}
    sx={{
      color: 'blue.900',
      fontWeight: 'bold',
      '&:hover': { color: 'blue.800' },
    }}
    {...props}
  />
)

const Header = ({ location }) => (
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
          <li sx={{ mx: 3, py: [3, 4, 4] }}>
            <NavLink to="/">Home</NavLink>
          </li>
          {location.pathname === '/' ? (
            <li sx={{ mx: 3, py: [3, 4, 4] }}>
              <NavLink as="a" href="#angebote">
                Angebote
              </NavLink>
            </li>
          ) : null}
          <li sx={{ mx: 3, py: [3, 4, 4] }}>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
          <li sx={{ mx: 3, py: [3, 4, 4] }}>
            <NavLink to="/about">Impressum</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
