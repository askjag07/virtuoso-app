import React from 'react'
import { navigate } from 'gatsby'
import { isAuthenticated } from '../services/auth'

export default function Guard({
  component: Component,
  admin,
  location,
  ...rest
}) {
  if (!isAuthenticated()) {
    navigate('/app/login/')
    return null
  }
  if (admin && !JSON.parse(window.sessionStorage.getItem('profile')).Admin) {
    navigate('/app/login/')
    return null
  }
  return <Component {...rest} />
}
