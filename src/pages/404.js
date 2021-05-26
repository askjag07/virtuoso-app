import React from 'react'

import Seo from '../components/seo'

export default function Lost() {
  return (
    <div
      className="spinner-border text-primary center position-absolute"
      role="status"
    >
      <Seo title="Lost" />
      <span className="visually-hidden">Authenticating...</span>
    </div>
  )
}
