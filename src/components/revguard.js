import React from 'react'
import { navigate } from 'gatsby'
import { isAuthenticated } from '../services/auth'

export default class RevGuard extends React.Component {
  componentDidMount() {
    if (isAuthenticated()) {
      navigate('/app/')
      return null
    }
  }
  render() {
    const { Component, ...rest } = this.props
    return <Component {...rest} />
  }
}
