import React from 'react'
import { Helmet } from 'react-helmet'

export default class Seo extends React.Component {
  render() {
    const { title } = this.props
    return (
      <>
        <Helmet title={`${title} | Virtuoso`} defer={false} />
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
