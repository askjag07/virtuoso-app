import React, { useReducer, useState } from 'react'
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
  const [formData, setFormData] = useReducer(formReducer, {})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = function (event) {
    event.preventDefault()
    setLoading(true)
    authorize(formData, 1).then(err => {
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
      <div
        className={
          'spinner-border text-primary center position-absolute ' +
          (loading ? 'visible' : 'invisible')
        }
        role='status'
      >
        <span className='visually-hidden'>Authenticating...</span>
      </div>
      <form
        className={
          'login card container-fluid justify-content-center align-items-stretch px-5 py-4 ' +
          (loading ? 'invisible' : 'visible')
        }
        onSubmit={handleSubmit}
      >
        <StaticImage
          className='icon d-block'
          src='../images/icon.png'
          placeholder='tracedSVG'
          alt='Virtuoso'
        />
        <h1 className='text-center display-6 mb-4'>Log In</h1>
        <div className='form-floating mb-3'>
          <input
            type='email'
            name='email'
            className='form-control'
            id='loginEmailInput'
            placeholder='Email address'
            autoComplete='email'
            onChange={handleChange}
            required
          />
          <label htmlFor='loginEmailInput' className='text-black-50'>
            Email address
          </label>
        </div>
        <div className='form-floating mb-4'>
          <input
            type='password'
            name='password'
            className='form-control'
            id='loginPasswordInput'
            placeholder='Password'
            autoComplete='current-password'
            onChange={handleChange}
            required
          />
          <label htmlFor='loginPasswordInput' className='text-black-50'>
            Password
          </label>
        </div>
        <div className='d-grid'>
          <button type='submit' className='btn btn-primary display-block'>
            Continue
          </button>
        </div>
        {error && (
          <div className='alert alert-danger mt-4' role='alert'>
            {error}
          </div>
        )}
        <p className='mt-4 text-center'>
          <small>
            Are you new? <Link to='/app/register/'>Register here.</Link>
          </small>
        </p>
      </form>
    </>
  )
}
