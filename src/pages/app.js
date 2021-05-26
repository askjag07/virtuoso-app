import React from 'react'
import { Router, Redirect } from '@reach/router'

import Guard from '../components/guard'
import RevGuard from '../components/revguard'
import Dashboard from '../templates/dashboard'
import Resources from '../templates/resources'
import Students from '../templates/students'
import Meet from '../templates/meet'
import Login from '../templates/login'
import Register from '../templates/register'

export default function Index() {
  console.clear()
  return (
    <>
      <Router basepath="/app">
        <Guard path="/" component={Dashboard} />
        <Guard path="/resources" component={Resources} />
        <Guard path="/students" component={Students} admin={true} />
        <Guard path="/meet" component={Meet} />
        <RevGuard path="/login" component={Login} />
        <RevGuard path="/register" component={Register} />
        <Redirect from="*" to="/app/" noThrow />
      </Router>
    </>
  )
}
