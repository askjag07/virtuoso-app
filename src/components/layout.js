import React from 'react'
import { Link, navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import 'bootstrap/js/dist/collapse'

export default function Layout({ children, link }) {
  const profile = JSON.parse(window.sessionStorage.getItem('profile'))
  function logout() {
    window.sessionStorage.clear()
    navigate('/app/login/')
  }
  function getLinks() {
    let jsx
    switch (link) {
      default:
        jsx = (
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            {profile.Admin && (
              <li className="nav-item me-2">
                <Link className="nav-link" to="/app/students/">
                  Students
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/app/resources/">
                Resources
              </Link>
            </li>
          </ul>
        )
        break
      case 'Resources':
        jsx = (
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item me-2">
              <Link className="nav-link" to="/app/">
                Home
              </Link>
            </li>
            {profile.Admin && (
              <li className="nav-item">
                <Link className="nav-link" to="/app/students/">
                  Students
                </Link>
              </li>
            )}
          </ul>
        )
        break
      case 'Students':
        jsx = (
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item me-2">
              <Link className="nav-link" to="/app/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app/resources/">
                Resources
              </Link>
            </li>
          </ul>
        )
        break
    }
    return jsx
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light shadow-sm">
        <div className="container-md">
          <Link className="navbar-brand" to="/app/">
            <StaticImage
              className="d-inline-block align-middle me-auto me-sm-4"
              src="../images/logo.png"
              alt="Virtuoso"
              height={35}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsableContent"
            aria-controls="collapsableContent"
            aria-expanded="false"
            aria-label="Toggle Menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsableContent">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">{getLinks()}</ul>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        </div>
      </nav>
      <div className="container-md body">{children}</div>
    </>
  )
}
