import React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/seo'

import Layout from '../components/layout'

export default function Dashboard() {
  const profile = JSON.parse(window.sessionStorage.getItem('profile'))
  const sessions0 = [
    {
      index: 1,
      date: new Date(2021, 5, 1, 10, 30),
    },
    {
      index: 2,
      date: new Date(2021, 5, 2, 10, 30),
    },
    {
      index: 3,
      date: new Date(2021, 5, 3, 10, 30),
    },
    {
      index: 4,
      date: new Date(2021, 5, 4, 10, 30),
    },
    {
      index: 5,
      date: new Date(2021, 5, 5, 10, 30),
    },
    {
      index: 6,
      date: new Date(2021, 5, 6, 10, 30),
    },
  ]
  const sessions1 = [
    {
      index: 1,
      date: new Date(2021, 5, 15, 10, 30),
    },
    {
      index: 2,
      date: new Date(2021, 5, 16, 10, 30),
    },
    {
      index: 3,
      date: new Date(2021, 5, 17, 10, 30),
    },
    {
      index: 4,
      date: new Date(2021, 5, 18, 10, 30),
    },
    {
      index: 5,
      date: new Date(2021, 5, 19, 10, 30),
    },
    {
      index: 6,
      date: new Date(2021, 5, 20, 10, 30),
    },
  ]
  var sessions
  switch (profile.Session) {
    case 0:
      sessions = sessions0
      break
    case 1:
      sessions = sessions1
      break
    default:
      sessions = sessions0.concat(sessions1)
      break
  }
  sessions.map(function (session, index) {
    sessions[index].nyet =
      session.date.getTime() - 300000 > new Date().getTime() ||
      session.date.getTime() + 5400000 < new Date().getTime()
    return null
  })
  return (
    <Layout>
      <Seo title="Dashboard" />
      <h1 className="py-3 mt-5">Hello {profile.Full_name}!</h1>
      <hr />
      <div className="pt-3 row">
        {sessions.map(function (session) {
          return (
            <Link
              className={`sessions col card bg-light shadow-sm border-0 p-4 mx-3 mb-4 ${
                session.nyet ? ' disabled-link' : ''
              }`}
              disabled={session.nyet}
              to="/app/meet/"
              state={{ session: session.index }}
              key={session.date}
            >
              <div>
                <h5 className={session.nyet ? ' text-dark' : ''}>
                  Join Session {session.index}
                </h5>
              </div>
              <p className={`m-0 ${session.nyet ? ' text-dark' : ''}`}>
                <small>
                  Date: &nbsp;{session.date.toDateString().slice(0, -5)}
                  <br />
                  Time: &nbsp;
                  {session.date.toLocaleString().slice(10, -6) +
                    ' AM - ' +
                    new Date(session.date.getTime() + 5400000)
                      .toLocaleString()
                      .slice(10, -6) +
                    ' PM'}
                </small>
              </p>
            </Link>
          )
        })}
      </div>
      <hr />
      {profile.Admin && (
        <Link
          className="sessions card bg-light shadow-sm border-0 p-4 mx-3 mb-4"
          to="/app/meet/"
          state={{ session: 0 }}
        >
          <div>
            <h5>Join Test Meeting</h5>
          </div>
          <p className="m-0">
            <small>
              Date: N/A
              <br />
              Time: N/A
            </small>
          </p>
        </Link>
      )}
    </Layout>
  )
}
