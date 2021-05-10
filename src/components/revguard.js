import React from 'react'
import { navigate } from 'gatsby'
import { isAuthenticated } from '../services/auth'

export default function RevGuard({ component: Component, location, ...rest }) {
  if (isAuthenticated()) {
    navigate('/app/')
    return null
  }
  return <Component {...rest} />
}
