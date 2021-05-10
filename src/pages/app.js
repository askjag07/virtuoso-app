import React from 'react'
import { Router } from '@reach/router'

import Guard from '../components/guard'
import RevGuard from '../components/revguard'
import Dashboard from '../templates/dashboard'
import Meet from '../templates/meet'
import Login from '../templates/login'
import Register from '../templates/register'

export default function Index() {
  return (
    <Router basepath='/app'>
      <Guard path='/' component={Dashboard} />
      <Guard path='/meet' component={Meet} />
      <RevGuard path='/login' component={Login} />
      <RevGuard path='/register' component={Register} />
    </Router>
  )
}
