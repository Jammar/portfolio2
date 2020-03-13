import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProBar from "../../components/ProBar"
import NavBar from "../../components/NavBar"

const ThisSitePage = () => (
  <Layout>
    <SEO title="About this site" />
    <NavBar />
    <ProBar />
    <div className="content">
      <h1>This is this site</h1>
      <div id="row">
        <div className="column">
          <p>
          <h2>Design</h2>
          <h3>Colour scheme</h3>
          <ul>
            <li>Inspiration from various sites across the web</li>
            <li>Color contrast the text</li>
            <li>Try the colors for visual impairment</li>
          </ul>
          </p>
        <p>
          <h2>UX</h2>
          <h3>User case/research</h3>
            <ul>
              <li>Portfolio, mainly for agencies or recruiters, therefore focus on bigger screens (instead of mobile-first)</li>
              <li>Simple and minimalistic, centered around the content</li>
            </ul>
        </p>
        </div>
        <div className="column">
          <p>
            <h2>Tech stack and performance</h2>
            <b>Gatsby</b>, which is a static web generator for <b>React.js</b>, super fast (try navigating the site).
          </p>
          <p>
            <h2>Further</h2>
            This site will act as a platform to play around with up-coming projects, such as: 
            <ul>
              <li>
                Put this site's content on a headless CMS and load it from there
              </li>
              <li>
                API requests to Spotify
              </li>
              <li>
                Fancy React Stuff
              </li>
              <li>
                CSS animations
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default ThisSitePage