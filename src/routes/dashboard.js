import React from 'react'
import { Link, navigate } from 'gatsby'

import Seo from '../components/seo'
import Layout from '../components/layout'

import { getAuthenticated } from '../services/auth'

let sessions = [
  {
    index: 1,
    date: new Date(2021, 5, 15, 17, 30),
  },
  {
    index: 2,
    date: new Date(2021, 5, 16, 17, 30),
  },
  {
    index: 3,
    date: new Date(2021, 5, 17, 17, 30),
  },
  {
    index: 4,
    date: new Date(2021, 5, 18, 17, 30),
  },
  {
    index: 5,
    date: new Date(2021, 5, 19, 17, 30),
  },
  {
    index: 6,
    date: new Date(2021, 5, 20, 17, 30),
  },
]
export default class Dashboard extends React.Component {
  state = {
    profile: {},
  }
  componentDidMount() {
    const { authenticated } = getAuthenticated()
    if (!authenticated) {
      navigate('/app/login/', {
        replace: true,
      })
    } else {
      this.setState({
        profile: JSON.parse(window.sessionStorage.getItem('profile')),
      })
      sessions.map(function (session, index) {
        sessions[index].nyet =
          session.date.getTime() - 300000 > new Date().getTime() ||
          session.date.getTime() + 5400000 < new Date().getTime()
        return null
      })
    }
  }
  render() {
    const { profile } = this.state
    return (
      <Layout link="Home">
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
                    Date: &nbsp; {session.date.toDateString().slice(0, -5)}
                    <br />
                    Time: &nbsp;{' '}
                    {`${session.date
                      .toLocaleTimeString()
                      .slice(0, -6)} PM - ${new Date(
                      session.date.getTime() + 5400000
                    )
                      .toLocaleTimeString()
                      .slice(0, -6)} PM`}
                  </small>
                </p>
              </Link>
            )
          })}
        </div>
        <hr />
        <Link to="/app/meet/" state={{ session: 0 }} />
      </Layout>
    )
  }
}
