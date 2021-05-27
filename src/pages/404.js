import React from 'react'

import Seo from '../components/seo'

export default class Lost extends React.Component {
  render() {
    return (
      <div
        className="spinner-border text-primary center position-absolute"
        role="status"
      >
        <Seo title="Lost" />
        <span className="visually-hidden">Redirecting...</span>
      </div>
    )
  }
}
