import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Joachim" />
    <div className='navbar'>
    <ul>
        <li>
          <Link to="./">
            Home
          </Link>
        </li>
        <li>/</li>
        <li className="menuactive">
            Joachim
        </li>
    </ul>
  </div>
  <div className="content">
    <h1>This is Joachim</h1>
    
    <p>
      A Bachelor of Computer Science with <span>a focus on interaction design</span>.
      <h2>Welcome to my very simple web portfolio!</h2>
      I like to think, discuss and criticise UX as well as usability and accessability. But I also really like to code.
    </p>
    <p>
        See <Link to="/projects/">PROJECTS</Link> for my work experience or click <Link to="/about/">ABOUT</Link> to read 
        more about how I made this site and my thought process designing it.
    </p>
  </div>
  </Layout>
)

export default IndexPage
