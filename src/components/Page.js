import React from 'react'
import { Global } from '@emotion/core'
import Layout from './Layout'

const Page = ({ element, props }) => (
  <>
    <Global styles={{ body: { margin: 0 } }} />
    <Layout {...props}>{element}</Layout>
  </>
)

export default Page
