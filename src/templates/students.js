import React from 'react'
import Layout from '../components/layout'

import { getStudents } from '../services/students'

export default function Students() {
  const [loading, setLoading] = React.useState(true)
  const [students, setStudents] = React.useState([])
  if (typeof window !== 'undefined') {
    getStudents(window.sessionStorage.getItem('token')).then(function (res) {
      if (res.error) {
        console.error(res.error)
      } else {
        setStudents(res.students)
        setLoading(false)
      }
    })
  }

  return (
    <Layout link="Students">
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
      )}
      <hr />
    </Layout>
  )
}
