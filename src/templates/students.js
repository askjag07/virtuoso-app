import React from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { getAuthenticated } from '../services/auth'
import { getStudents } from '../services/students'

export default class Students extends React.Component {
  _isMounted = false
  state = {
    loading: true,
    students: null,
  }

  constructor(props) {
    super(props)
    this.handleResponse = this.handleResponse.bind(this)
  }

  componentDidMount() {
    this._isMounted = true
    const { authenticated, admin } = getAuthenticated()
    if (!authenticated) {
      navigate('/app/login/', {
        replace: true,
      })
    } else {
      if (admin) {
        getStudents(window.sessionStorage.getItem('token')).then(res =>
          this.handleResponse(res)
        )
      } else {
        navigate('/app/', {
          replace: true,
        })
      }
    }
  }

  handleResponse(res) {
    if (this._isMounted) {
      if (res.error) {
        console.error(res.error)
      } else {
        this.setState({ loading: false, students: res.students })
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { loading, students } = this.state
    return (
      <Layout link="Students">
        <Seo title="Students" />
        <h1 className="py-3 mt-5">Students</h1>
        <hr />
        {loading ? (
          <div
            className="spinner-border text-primary center position-absolute"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <div className="table-responsive-sm">
              <table className="table table-striped my-4">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Standard</th>
                    <th scope="col">Registered</th>
                    <th scope="col">Last Logged In</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(function (student, i) {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{student.Full_name}</td>
                        <td>{student.Email}</td>
                        <td>{student.Standard}</td>
                        <td>
                          {new Date(
                            Date.parse(student.Created_at)
                          ).toLocaleString()}
                        </td>
                        <td>
                          {new Date(
                            Date.parse(student.Updated_at)
                          ).toLocaleString()}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <hr />
          </>
        )}
      </Layout>
    )
  }
}
