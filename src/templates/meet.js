import React from 'react'
import { navigate } from 'gatsby'

import Seo from '../components/seo'

import Meeting from '../components/meeting'

export default class Meet extends React.Component {
  componentDidMount() {
    if (!window.history.state) {
      navigate('/app/')
    }
  }
  render() {
    return (
      <>
        <Seo title="Meeting" />
        {window.history.state && <Meeting />}
      </>
    )
  }
}
