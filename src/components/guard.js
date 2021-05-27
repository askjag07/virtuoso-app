import React from 'react'
import { navigate } from 'gatsby'
import { isAuthenticated } from '../services/auth'

export default class Guard extends React.Component {
  componentDidMount() {
    if (!isAuthenticated()) {
      navigate('/app/login/')
      return null
    }
    if (
      this.props.admin &&
      !JSON.parse(window.sessionStorage.getItem('profile')).Admin
    ) {
      navigate('/app/login/')
      return null
    }
  }
  render() {
    const { Component, ...rest } = this.props
    return <Component {...rest} />
  }
}
