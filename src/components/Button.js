import styled from '@emotion/styled'
import { css } from 'theme-ui'

const Button = styled('button')(
  css({
    appearance: 'none',
    bg: 'primary',
    borderColor: 'primary',
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 2,
    color: 'white',
    cursor: 'pointer',
    fontSize: 3,
    fontWeight: 'bold',
    my: 4,
    py: 3,
    px: 4,
    textDecoration: 'none',
    transition: 'background-color 0.2s ease-out',
    ':hover': {
      bg: 'primaryHover',
    },
  })
)

export default Button
