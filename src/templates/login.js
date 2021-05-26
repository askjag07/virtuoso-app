import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { authorize } from '../services/auth'

const formReducer = function (state, event) {
  return {
    ...state,
    [event.name]: event.value,
  }
}

export default function Login() {
  const [formData, setFormData] = React.useReducer(formReducer, {})
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const handleSubmit = function (event) {
    event.preventDefault()
    setLoading(true)
    authorize(formData, 1).then(function (err) {
      if (err) {
        setError(err)
        setLoading(false)
      }
    })
  }

  const handleChange = function (event) {
    let value = event.target.value
    if (event.target.name === 'email') {
      value = value.toLowerCase()
    }
    setFormData({
      name: event.target.name,
      value: value,
    })
  }

  return (
    <>
      {loading && (
        <div
          className="spinner-border text-primary center position-absolute"
          role="status"
        >
          <span className="visually-hidden">Authenticating...</span>
        </div>
      )}
      <form
        id="login"
        className={`card container-fluid border-0 shadow justify-content-center align-items-stretch px-5 py-4 ${
          loading ? 'd-none' : ''
        }`}
        onSubmit={handleSubmit}
      >
        <StaticImage
          className="icon mx-auto mt-1"
          src="../images/icon.png"
          placeholder="tracedSVG"
          alt="Virtuoso"
        />
        <h1 className="text-center display-6 my-4">Log In</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            id="loginEmailInput"
            placeholder="Email address"
            autoComplete="email"
            onChange={handleChange}
            required
          />
          <label htmlFor="loginEmailInput" className="text-black-50">
            Email address
          </label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="password"
            name="password"
            className="form-control"
            id="loginPasswordInput"
            placeholder="Password"
            autoComplete="current-password"
            onChange={handleChange}
            required
          />
          <label htmlFor="loginPasswordInput" className="text-black-50">
            Password
          </label>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary display-block">
            Continue
          </button>
        </div>
        {error && (
          <div className="alert alert-danger mt-4" role="alert">
            {error}
          </div>
        )}
        <p className="mt-4 text-center">
          <small>
            Are you new? <Link to="/app/register/">Register here.</Link>
          </small>
        </p>
      </form>
    </>
  )
}
