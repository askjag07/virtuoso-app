import React from 'react'
import { navigate } from 'gatsby'
import { isAuthenticated } from '../services/auth'

export default function Guard({ component: Component, location, ...rest }) {
  if (!isAuthenticated()) {
    navigate('/app/login/')
    return null
  }
  return <Component {...rest} />
}
