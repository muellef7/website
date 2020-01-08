const baseColors = {
  white: '#fff',
  black: '#162020',
  grey: {
    200: '#f3f4f4',
    300: '#eee',
    500: '#ccc',
    700: '#6e797a',
  },
  blue: {
    100: '#f6f9fc',
    800: '#003246',
    900: '#002838',
  },
  yellow: {
    100: '#fffaea',
    600: '#dfc220',
    700: '#ffd700',
    900: '#b78c00',
  },
}

const colors = {
  ...baseColors,
  background: baseColors.white,
  primary: baseColors.yellow['700'],
  primaryHover: baseColors.yellow['600'],
  subtle: baseColors.blue['100'],
  text: baseColors.black,
}

const theme = {
  colors,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Montserrat, system-ui, sans-serif',
  },
  fontWeights: {
    body: 400,
    bold: 700,
    display: 800,
    extraBold: 900,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    large: 2,
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 44, 64, 72],
  radii: [0, 2, 4, 8],
  sizes: {
    container: {
      narrow: 1000,
      regular: 1200,
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  text: {
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caps: {
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
  styles: {
    root: {
      bg: 'background',
      color: 'text',
      variant: 'text.body',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      transition: 'color 0.2s ease-out',
      '&:hover': {
        color: 'primaryHover',
      },
    },
    h1: {
      fontSize: [4, 5, 6],
      my: 4,
      variant: 'text.heading',
    },
    h2: {
      fontSize: [3, 4, 5],
      m: 0,
      mb: 4,
      variant: 'text.heading',
    },
    h3: {
      fontSize: [3, 3, 4],
      m: 0,
      mb: 4,
      variant: 'text.heading',
    },
    p: {
      fontSize: [2, 2, 3],
      m: 0,
      mb: 4,
      variant: 'text.body',
      lineHeight: 'large',
      '&:last-child': {
        mb: 0,
      },
    },
  },
}

export default theme
