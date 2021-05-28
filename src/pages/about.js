import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Seo from '../components/seo'

export default class About extends React.Component {
  tools = [
    {
      name: 'Gatsby',
      description: 'A blazing-fast static site generator built on React.',
      link: 'https://www.gatsbyjs.com/docs/tutorial/part-0/',
      type: 'React Framework',
    },
    {
      name: 'Preact',
      description:
        'A lighter and faster alternative to the populer web library, React.',
      link: 'https://preactjs.com/guide/v10/getting-started',
      type: 'JavaScript Library',
    },
    {
      name: 'Bootstrap',
      description:
        "The world's most popular atomic css library for responsive websites.",
      link: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
      type: 'Style Library',
    },
    {
      name: 'JavaScript',
      description:
        'The most active and widely-applicable scripting language in the internet.',
      link: 'https://www.javascript.com/learn/strings',
      type: 'Scripting Language',
    },
    {
      name: 'SCSS',
      description:
        'A css extension language made specifically for rapid development.',
      link: 'https://sass-lang.com/guide',
      type: 'Scripting Language',
    },
    {
      name: 'Opentok',
      description:
        'A JavaScript library for building robust meeting applications.',
      link: 'https://tokbox.com/developer/tutorials/web/basic-video-chat/',
      type: 'WebRTC Library',
    },
    {
      name: 'Golang',
      description: 'The most efficient programming language in the world.',
      link: 'https://tour.golang.org/welcome/1',
      type: 'Programming Language',
    },
    {
      name: 'Gin',
      description:
        'High performance Golang framework that delivers in milliseconds.',
      link: 'https://github.com/gin-gonic/gin',
      type: 'Web Framework',
    },
    {
      name: 'JWT',
      description:
        'Enterprise-grade security protocol impenetrable by hackers.',
      link: 'https://jwt.io/introduction',
      type: 'Security Protocol',
    },
    {
      name: 'Nginx',
      description:
        'Bionic web server capable of handling lakhs of connections effortlessly.',
      link: 'https://www.digitalocean.com/community/tutorial_collections/how-to-install-nginx',
      type: 'Web Server',
    },
    {
      name: 'Debian',
      description:
        'Light, free, and universal operating system built on Linux.',
      link: 'https://www.debian.org/doc/manuals/debian-reference/ch01.en.html',
      type: 'Operating System',
    },
    {
      name: 'Mongo',
      description:
        'High-performance, scaleable, document-oriented database with power.',
      link: 'https://docs.mongodb.com/manual/introduction/',
      type: 'Document Database',
    },
  ]
  render() {
    return (
      <Header>
        <Seo title="About" />
        <div className="row p-5 text-md-center justify-content-center align-items-center">
          <div className="col-lg-8 py-5">
            <h1 className="display-5 fw-bold">
              Ignited <span className="text-primary">Passion</span>
              <br />
            </h1>
            <blockquote>
              <p className="blockquote lead my-5">
                I once attended programming classes as a student, hoping to
                learn something without a clue as for what it was. My teacher,
                at that time, was a very special one who inspired me to go
                beyond the curriculum. For months, I had marched forward,
                mastering complex, enterprise-grade tools, until I reached a
                dead end. I had to leave programming to prepare for college, but
                I couldn't let it go to waste. This, coupled with my avid
                programming skills, created the interactive programming school,
                Virtuoso, to pass on my knowledge and passion.
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Akshaj Jagarapu, Founder
            </figcaption>
          </div>
        </div>
        <div className="row text-md-center justify-content-between align-items-center p-5 mt-5">
          <div className="col">
            <h1 className="display-5 fw-bold">Software Tools</h1>
          </div>
        </div>
        <div className="row px-5">
          {this.tools.map(({ name, description, link, type }) => {
            return (
              <div className="col-sm-4 mb-4">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
                    <p className="card-text">{description}</p>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      class="btn btn-sm btn-primary"
                    >
                      Learn {name}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="row justify-content-center align-items-center p-5 m-5">
          <div className="col-6 d-grid">
            <Link
              to="/app/register"
              className="d-block btn btn-primary btn-lg shadow-lg"
            >
              Register Now
            </Link>
          </div>
        </div>
      </Header>
    )
  }
}
