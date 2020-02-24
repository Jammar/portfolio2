import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
// import Image1 from "../images/accessible-colors.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <NavBar />
    <div className="content">
      <h1>This is about the site</h1> {/* <h1>Well this site...</h1> */}
      <div className="ingress">
        The idea with this page is to describe this site and the ideas put into making it.
      </div>
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
              <li>Simple and minimalistic, centered around the content (which content?!)</li>
            </ul>
        </p>
        </div>
        <div className="column">
          <p>
            <h2>Tech stack and performance</h2>
            <b>Gatsby</b>, which is a static web generator for <b>React.js</b>, super fast (try navigating the site).
            For this project I started off with the default boilerplate (gatsby-starter-default).
          </p>
          <p>
            <h2>Further</h2>
            I've thought about this as a starter platform for me to play around with my own up-coming projects, such as: 
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

export default AboutPage