import React from 'react'
import { navigate } from '@reach/router'
import { Helmet } from 'react-helmet'

import { getAuthenticated } from '../services/auth'

const authRoutes = ['Dashboard', 'Students', 'Meeting', 'Resources']
const noAuthRoutes = ['Log In', 'Register']

export default class Seo extends React.Component {
  componentDidMount() {
    const { title } = this.props
    const { authenticated, admin, state } = getAuthenticated()
    if (authRoutes.includes(title)) {
      if (authenticated) {
        if ((title === 'Students' && !admin) || (title === 'Meet' && !state)) {
          navigate('/app/')
        }
      } else {
        navigate('/app/login/')
      }
    } else if (noAuthRoutes.includes(title)) {
      if (authenticated) {
        navigate('/app/')
      }
    } else {
      navigate('/app/')
    }
  }
  render() {
    const { title } = this.props
    return (
      <>
        <Helmet title={`* ${title} | Virtuoso`} defer={false} />
        <Helmet>
          <script type="application/ld+json">
            {`
                {
                    "@context": "https://govirtuoso.org",
                    "@type": "Virtuoso",
                    "url": "https://govirtuoso.org",
                    "name": "Virtuoso",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-86882-33655",
                        "contactType": "Customer Support"
                    }
                }
            `}
          </script>
        </Helmet>
      </>
    )
  }
}
