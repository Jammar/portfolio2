import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image1 from "../images/accessible-colors.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className='navbar'>
    <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>/</li>
        <li className="menuactive">
            About
        </li>
    </ul>
  </div>
  <div className="content">
    <h1>About this site</h1>
    <p>
      The idea with this page is to describe this site and the ideas put into making it.
      <h2>Design</h2>
      <h3>Colour scheme</h3>
      <ul>
        <li>Inspiration from various sites across the web</li>
        <li>Color contrast, the text, view result</li>
        <li>Try the colors for visual impairment</li>
      </ul>
      The text's font colour passes AAA standard for WCAG, which requires contrast ratio: 7. <b>My contrast ratio is 12.33</b>. 
      For headlines (h1 and h2), since they are bigger sized fonts I stuck with the colours that I came to like. 
      {/* <img src={Image1} id="odd" alt="thisa picture" /> */}
    </p>
    <p>
      <h2>Tech stack and performance</h2>
      <b>Gatsby</b>, which is a static web generator for <b>React.js</b>, super fast (try pressing the links).
      For this project I started off with the default boilerplate (gatsby-starter-default).
      
      {/*
      There will be a
      CMS, as in the Content Management System, I hosted on <b>Wordpress as a headless CMS</b>. I could've just
      hard-coded the text and images, but I wanted to practice implementing wordpress since 
      it's a commonly used tool! (in progress) */}
    </p>
    <p>
      <h2>UX</h2>
      <h3>User case/research</h3>
        <ul>
          <li>Portfolio, mainly for agencies or recruiters, therefore focus on bigger screens (instead of mobile-first)</li>
          <li>Simple and minimalistic, centered around the content</li>
        </ul>
        </p><p>
      <h3>Best practices</h3>
      <ul>
        <li>
          Selected menu items should be marked by at least two features (bold and arrow marker, in this case).
          Based on knowledge from a Senior UX colleague.
        </li>
      </ul>
    </p>
    <p>
      <h2>Own preferences</h2>
      I've long wanted sites to have the navigation menu bar in the BOTTOM in mobile view, close to the
           fingers or the thumb which is the most common use {/*(see research)*/}.
      </p>
      <p>
          I find it weird how o a lot of mobile phones the buttons are so far away from the user's fingers, 
          forcing the user to use two hands. See Apple's 'back button' on iPhone which was (or still is?) at the 
          top left of the screen.
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
  </Layout>
)

export default AboutPage