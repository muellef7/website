/** @jsx jsx */
import styled from '@emotion/styled'
import { useState } from 'react'
import { css, jsx } from 'theme-ui'
import Button from './Button'

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const Label = styled('label')(
  css({
    display: 'flex',
    flexDirection: 'column',
    fontSize: 1,
    fontWeight: 'bold',
    my: 2,
  })
)

const Input = styled('input')(
  css({
    appearance: 'none',
    bg: 'subtle',
    borderColor: 'transparent',
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 2,
    color: 'text',
    fontSize: 3,
    my: 2,
    p: 3,
    transition: 'border-color 0.2s ease-out',
    ':focus': {
      borderColor: 'blue.900',
    },
  })
)

const ContactForm = ({ navigate }) => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target

    setLoading(true)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => {
        navigate(form.getAttribute('action'))
      })
      .catch(error => {
        console.error(error)
        navigate('/error')
      })
  }

  return (
    <form
      sx={{ display: 'flex', flexDirection: 'column' }}
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot"
      method="POST"
      name="contact"
      onSubmit={handleSubmit}
    >
      <input name="form-name" type="hidden" value="contact" />
      <input hidden name="bot" />
      <Label>
        <span>Name</span>
        <Input name="name" onChange={handleChange} required />
      </Label>
      <Label>
        <span>Email</span>
        <Input name="email" onChange={handleChange} required type="email" />
      </Label>
      <Label>
        <span>Telefon</span>
        <Input name="telefon" onChange={handleChange} />
      </Label>
      <Label>
        <span>Nachricht</span>
        <Input
          as="textarea"
          name="nachricht"
          onChange={handleChange}
          required
          rows={4}
          sx={{ resize: 'vertical' }}
        />
      </Label>
      <Button disabled={loading} sx={{ alignSelf: 'center' }} type="submit">
        Abschicken
      </Button>
    </form>
  )
}

export default ContactForm
