import React from 'react'
import { Helmet } from 'react-helmet'

export default class Seo extends React.Component {
  render() {
    const { title } = this.props
    return (
      <>
        <Helmet title={`${title} | Virtuoso`} defer={false} />
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="keywords"
            content="Programming Camp, Coding Camp, JavaScript Classes, Software Training, JavaScript Training, Software Camp, JavaScript Camp, Software Classes"
          />
          <meta name="author" content="Akshaj Jagarapu" />
          <meta
            name="description"
            content="Learn the fundamentals of Artificial Intelligence (AI) with the most active language on the internet, JavaScript. With hands-on lectures and labs, build AI-powered web applications available to the public. Reach the heights of programming within a week under the guidance of a full-stack developer."
          />
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
