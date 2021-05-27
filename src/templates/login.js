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

export default class Login extends React.Component {
  _isMounted = false
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: null,
      formData: {},
    }
  }
  componentDidMount() {
    this._isMounted = true
  }
  handleSubmit = function (event) {
    if (this._isMounted) {
      const { formData } = this.state
      event.preventDefault()
      this.setState({ loading: true })
      authorize(formData, 1).then(function (err) {
        if (err) {
          this.setState({ error: err, loading: false })
        }
      })
    }
  }

  handleChange = function (event) {
    if (this._isMounted) {
      const { formData } = this.state
      let value = event.target.value
      if (event.target.name === 'email') {
        value = value.toLowerCase()
      }
      this.setState(
        formReducer(formData, {
          name: event.target.name,
          value: value,
        })
      )
    }
  }
  componentWillUnmount() {
    this._isMounted = false
  }
  render() {
    const { loading, error } = this.state
    return (
      <>
        <Seo title="Log In" />
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
          onSubmit={this.handleSubmit}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
}
