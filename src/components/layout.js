import React from 'react'
import { Link, navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import 'bootstrap/js/dist/collapse'

let profile = {}

export default class Layout extends React.Component {
  _isMounted = false
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }
  componentDidMount() {
    this._isMounted = true
    profile = JSON.parse(window.sessionStorage.getItem('profile'))
  }
  logout() {
    if (this._isMounted) {
      window.sessionStorage.clear()
      navigate('/app/login/', {
        replace: true,
      })
    }
  }
  componentWillUnmount() {
    this._isMounted = false
  }
  render() {
    const { link } = this.props
    return (
      <>
        <nav
          className={`navbar navbar-light shadow-sm ${
            profile.Admin ? 'navbar-expand-sm' : ''
          }`}
        >
          <div className="container-md">
            <Link className="navbar-brand" to="/app/">
              <StaticImage
                className="d-inline-block align-middle me-auto me-sm-4"
                src="../images/logo.png"
                alt="Virtuoso"
                height={35}
              />
            </Link>
            {profile.Admin && (
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
            )}
            <div
              className={profile.Admin ? 'collapse navbar-collapse' : ''}
              id="collapsableContent"
            >
              {profile.Admin && (
                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                  {link !== 'Home' && (
                    <li className="nav-item me-2">
                      <Link className="nav-link" to="/app/">
                        Home
                      </Link>
                    </li>
                  )}
                  {link !== 'Students' && (
                    <li className="nav-item me-2">
                      <Link className="nav-link" to="/app/students/">
                        Students
                      </Link>
                    </li>
                  )}
                </ul>
              )}
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={this.logout}
              >
                Log Out
              </button>
            </div>
          </div>
        </nav>
        <div className="container-md">{this.props.children}</div>
      </>
    )
  }
}
