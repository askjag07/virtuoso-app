import { navigate } from 'gatsby'

const isBrowser = typeof window !== 'undefined'

export const isAuthenticated = function () {
  if (!isBrowser) {
    return null
  }
  if (
    window.sessionStorage.getItem('isAuthenticated') === null ||
    window.sessionStorage.getItem('token') === null ||
    window.sessionStorage.getItem('profile') === null
  ) {
    window.sessionStorage.clear()
    return false
  }
  return true
}

export const authorize = async function (userData, type) {
  if (!isBrowser) {
    return null
  }

  let types = ['register', 'login']
  let res = await fetch(`https://govirtuoso.org/api/auth/${types[type]}`, {
    method: 'POST',
    headers: new Headers().append('Content-Type', 'application/json'),
    body: JSON.stringify(userData),
  })

  let response = await res.json()
  if (response.error) {
    return response.error
  }
  window.sessionStorage.clear()
  window.sessionStorage.setItem('isAuthenticated', 'true')
  window.sessionStorage.setItem('token', response.token)

  let profile = JSON.parse(atob(response.token.split('.')[1]))
  delete profile.exp
  profile.Email = userData.email

  window.sessionStorage.setItem('profile', JSON.stringify(profile))

  navigate('/app/')
  return null
}
