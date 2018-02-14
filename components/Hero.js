import Link from 'next/link'
import { withRouter } from 'next/router'
import React, { Component } from 'react'


class Hero extends Component {
  render () {
    return (
      <section className="hero">
      <style jsx>{`
        .hero {
          height: 80vh;
        }
      `}</style>
        <div className="hero-body is-light">
          <div className="columns is-centered is-multiline">
    
            <div className="column is-narrow has-text-centered">
              <figure className="image is-128x128">
                <img src="https://cdn.tipe.io/tipe/tipe-1024x1024.png?w=256" alt="Tipe, content backend for all your apps" />
              </figure>
              <h2 className="subtitle">Tipe</h2>
            </div>
    
            <div className="column is-1 is-narrow">
              <h1 className="title">+</h1>
            </div>
    
            <div className="column is-narrow has-text-centered">
              <figure className="image is-128x128">
                <img src="https://cdn.tipe.io/tipe/nuxt.png?w=256" alt="Nuxt" />
              </figure>
              <h2 className="subtitle">Nuxt</h2>
            </div>
            <div className="column is-1 is-narrow">
              <h1 className="title">+</h1>
            </div>
            <div className="column is-narrow has-text-centered">
              <figure className="image is-128x128">
                <img src="https://cdn.tipe.io/tipe/graphql.png?w=256" alt="GraphQL" />
              </figure>
              <h2 className="subtitle">GraphQL</h2>
            </div>
    
            <div className="column is-12">
              <div className="columns is-centered">
                <div className="column is-6">
                  <div className="content is-large">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="columns">
                <div className="column is-narrow">
                  <a className="button is-primary" href="https://tipe.io" target="_blank">
                    Sign up
                  </a>
                </div>
                <div className="column is-narrow">
                  <a className="button is-primary is-outlined" href="https://docs.tipe.io" target="_blank">
                    hello
                  </a>
                </div>
                <div className="column is-narrow">
                  <a className="button is-text" ref="twitter"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(Hero)
