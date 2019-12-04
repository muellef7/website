/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import 'typeface-montserrat'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => (
  <Styled.root
    sx={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh',
      overflowX: 'hidden',
    }}
  >
    <Header />
    {children}
    <Footer />
  </Styled.root>
)

export default Layout
