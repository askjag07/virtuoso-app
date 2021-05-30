import React from 'react'
import { Helmet } from 'react-helmet'

export default class Seo extends React.Component {
  render() {
    return (
      <>
        <Helmet title={`${this.props.title} | Virtuoso`} defer={false} />
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
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "@id": "https://govirtuoso.org",
                    "name": "Virtuoso",
                    "url": "https://govirtuoso.org",
                    "logo": "https://govirtuoso.org/logo.png",
                    "telephone": "+918688233655",
                    "speakable": {
                      "@type": "SpeakableSpecification",
                      "xpath": [
                          "/html/head/title",
                          "/html/head/meta[@name='description']/@content"
                        ]
                      }
                    }
                }
            `}
          </script>
        </Helmet>
      </>
    )
  }
}
