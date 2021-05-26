import React from 'react'
import { navigate } from 'gatsby'

import Meeting from '../components/meeting'

export default function Meet() {
  if (!window.history.state) {
    navigate('/app/')
  }
  return <>{window.history.state && <Meeting />}</>
}
