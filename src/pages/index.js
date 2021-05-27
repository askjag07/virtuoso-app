import React from 'react'
import { navigate } from 'gatsby'

import Seo from '../components/seo'

export default class Home extends React.Component {
  componentDidMount() {
    navigate('/app/login/')
  }
  render() {
    return (
      <div
        className="spinner-border text-primary center position-absolute"
        role="status"
      >
        <Seo title="Home" />
        <span className="visually-hidden">Redirecting...</span>
      </div>
    )
  }
}
