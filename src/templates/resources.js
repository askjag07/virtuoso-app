import React from 'react'
import { navigate } from 'gatsby'

import Seo from '../components/seo'
import Layout from '../components/layout'

import { getAuthenticated } from '../services/auth'

const resources = [
  {
    name: 'session1.zip',
    description: 'Use Visual Studio Code to set up a basic file structure.',
  },
  {
    name: 'session2.zip',
    description:
      'Learn about the variables and logical operations with a test.',
  },
  {
    name: 'session3.zip',
    description: 'Master JavaScript basics and create a calculator program.',
  },
]

export default class Resources extends React.Component {
  componentDidMount() {
    const { authenticated } = getAuthenticated()
    if (!authenticated) {
      navigate('/app/login/', {
        replace: true,
      })
    }
  }
  render() {
    return (
      <Layout
        link="Resources"
        className="d-flex justify-content-center align-items-center"
      >
        <Seo title="Resources" />
        <h1 className="py-3 mt-5">Resources</h1>
        <hr />
        <ul className="list-group my-4">
          {resources.map(function ({ name, description }) {
            return (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div
                  href={`./downloads/${name}`}
                  download
                  className="ms-2 me-auto"
                >
                  <div className="fw-bold">{name}</div>
                  {description}
                </div>
                <a
                  className="btn btn-sm btn-primary"
                  href={`./downloads/${name}`}
                  download
                >
                  Download
                </a>
              </li>
            )
          })}
        </ul>
        <hr />
      </Layout>
    )
  }
}
