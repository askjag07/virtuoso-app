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

export default class Index extends React.Component {
  componentWillUnmount() {
    console.clear()
  }

  render() {
    return (
      <>
        <Router basepath="/app">
          <Guard path="/" Component={Dashboard} />
          <Guard path="/resources" Component={Resources} />
          <Guard path="/students" Component={Students} admin={true} />
          <Guard path="/meet" Component={Meet} />
          <RevGuard path="/login" Component={Login} />
          <RevGuard path="/register" Component={Register} />
          <Redirect from="*" to="/app/" noThrow />
        </Router>
      </>
    )
  }
}
