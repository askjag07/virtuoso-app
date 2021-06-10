import React from 'react'
import { Router, Redirect } from '@reach/router'

import Dashboard from '../routes/dashboard'
import Students from '../routes/students'
import Meet from '../routes/meet'
import Login from '../routes/login'
import Register from '../routes/register'

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
