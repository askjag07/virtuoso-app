import React from 'react'
import { navigate } from 'gatsby'

import Seo from '../components/seo'

import Meeting from '../components/meeting'

export default function Meet() {
  if (!window.history.state) {
    navigate('/app/')
  }
  return (
    <>
      <Seo title="Meeting" />
      {window.history.state && <Meeting />}
    </>
  )
}
