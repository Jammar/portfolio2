import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
// import Socials from "../components/Socials"
import avatar from "../assets/images/profo-el-pictuehero.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Joachim" />
    <div className='navbar'>
      <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="menuactive">
            <Link to="/joachim/">
              Who is
            </Link>    
          </li>
          <li>
            <Link to="/projects/">
              Which projects
            </Link>    
          </li>
          <li>
            <Link to="/about/">
              What about
            </Link>
          </li>
      </ul>
    </div>
  <div className="content">
    <h1>This is Joachim</h1>
    <img className="avatar" src={avatar} alt="" />
    <div className="ingress">
      A Bachelor of Computer Science with <span>a focus on interaction design</span>.
    </div>
    < br/><br/>
    <p>
      I like to think, discuss and criticise UX as well as usability and accessability. But I also really like to code.
      Welcome to my simple page!
    </p>
    {/* <p>
        See <Link to="/projects/">PROJECTS</Link> for my work experience or click <Link to="/about/">ABOUT</Link> to read 
        more about how I made this site and my thought process designing it.
    </p> */}
  </div>
  {/* <Socials /> */}
  </Layout>
)

export default IndexPage
