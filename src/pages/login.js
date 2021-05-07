import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

import Layout from '../../templates/layout'

export default function Login() {
  return (
    <Layout nocta={true} stuck={true}>
      <form noValidate>
        <TextField label='Email' variant='filled' color='secondary' required />
        <br />
        <TextField label='Password' variant='filled' color='secondary' required />
      </form>
    </Layout>
  )
}
