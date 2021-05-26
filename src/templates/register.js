import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'

import { authorize } from '../services/auth'

const formReducer = function (state, event) {
  return {
    ...state,
    [event.name]: event.value,
  }
}

export default function Register() {
  var [formData, setFormData] = React.useReducer(formReducer, {})
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const handleSubmit = function (event) {
    event.preventDefault()
    setLoading(true)
    formData.session = new Date().getTime() < new Date(2021, 5, 7) ? 0 : 1
    authorize(formData, 0).then(function (err) {
      if (err) {
        setError(err)
        setLoading(false)
      }
    })
  }

  const handleChange = function (event) {
    let value = event.target.value
    let errmsg
    switch (event.target.name) {
      case 'email':
        errmsg = 'Invalid email address.'
        if (error === errmsg || error === null) {
          value = value.toLowerCase()
          if (
            !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
              value
            )
          ) {
            setError(errmsg)
          } else {
            setError(null)
          }
        }
        break
      case 'full_name':
        let names = []
        let values = value.split(' ')
        for (let name in values) {
          name = values[name].toLowerCase()
          names.push(name.charAt(0).toUpperCase() + name.slice(1))
        }
        value = names.join(' ')
        break
      case 'password':
        errmsg = 'Password requires > 6 characters.'
        if (error === errmsg || error === null) {
          if (value.length < 6) {
            setError(errmsg)
          } else {
            setError(null)
          }
        }
        break
      case 'standard':
        value = parseInt(value)
        break
      default:
        break
    }

    setFormData({
      name: event.target.name,
      value: value,
    })
  }

  return (
    <>
      <Seo title="Register" />
      {loading && (
        <div
          className="spinner-border text-primary center position-absolute"
          role="status"
        >
          <span className="visually-hidden">Authenticating...</span>
        </div>
      )}
      <form
        id="register"
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
        <h1 className="text-center display-6 my-4">Register</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="full_name"
            className="form-control"
            id="registerNameInput"
            placeholder="Full name"
            autoComplete="name"
            onChange={handleChange}
            required
          />
          <label htmlFor="registerNameInput" className="text-black-50">
            Full name
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="email"
            className="form-control"
            id="registerEmailInput"
            placeholder="Email address"
            autoComplete="email"
            onChange={handleChange}
            required
          />
          <label htmlFor="registerEmailInput" className="text-black-50">
            Email address
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            id="registerPasswordInput"
            placeholder="Password"
            autoComplete="new-password"
            onChange={handleChange}
            required
          />
          <label htmlFor="registerPasswordInput" className="text-black-50">
            Password
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="registerStandardSelect" className="mb-3">
            Standard:
          </label>
          <select
            name="standard"
            className="form-select"
            id="registerStandardSelect"
            aria-label="Standard"
            onBlur={handleChange}
            required
          >
            <option selected disabled>
              -
            </option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            disabled={error}
            className="btn btn-primary display-block"
          >
            Continue
          </button>
        </div>
        {error && (
          <div className="alert alert-danger my-3" role="alert">
            {error}
          </div>
        )}
        <p className="mt-4 text-center">
          <small>
            Already registered? <Link to="/app/login/">Log in here.</Link>
          </small>
        </p>
      </form>
    </>
  )
}
