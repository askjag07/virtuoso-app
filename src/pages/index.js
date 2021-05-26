import React from 'react'
import { navigate } from 'gatsby'

import Seo from '../components/seo'

export default function Home() {
  navigate('/app/login/')
  return (
    <div
      className="spinner-border text-primary center position-absolute"
      role="status"
    >
      <Seo title="Home" />
      <span className="visually-hidden">Authenticating...</span>
    </div>
  )
}
