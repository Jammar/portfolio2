import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProMenu from "../components/ProMenu"

const ProjectPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className='navbar'>
      <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/joachim/">
              Who is
            </Link>    
          </li>
          <li className="menuactive">
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
      <h1>These are his projects</h1>
        <span className="ingress">
          All of these projects have been team efforts.
        </span>
    </div>       
  <ProMenu /> 
  </Layout>
)

export default ProjectPage
