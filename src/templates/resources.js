import React from 'react'
import Layout from '../components/layout'

export default function Resources() {
  let resources = [
    {
      name: 'session1.zip',
      description: 'Coming soon...',
    },
    {
      name: 'session2.zip',
      description: 'Coming soon...',
    },
    {
      name: 'session3.zip',
      description: 'Coming soon...',
    },
    {
      name: 'session4.zip',
      description: 'Coming soon...',
    },
    {
      name: 'session5.zip',
      description: 'Coming soon...',
    },
    {
      name: 'session6.zip',
      description: 'Coming soon...',
    },
  ]

  return (
    <Layout
      link="Resources"
      className="d-flex justify-content-center align-items-center"
    >
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
