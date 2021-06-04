import React from 'react'
import { Router, Redirect } from '@reach/router'

import Dashboard from '../templates/dashboard'
import Students from '../templates/students'
import Meet from '../templates/meet'
import Login from '../templates/login'
import Register from '../templates/register'

export default class Index extends React.Component {
  render() {
    return (
      <Router basepath="/app">
        <Dashboard path="/" />
        <Students path="/students" />
        <Meet path="/meet" />
        <Login path="/login" />
        <Register path="/register" />
        <Redirect from="*" to="/app/" noThrow />
      </Router>
    )
  }
}
