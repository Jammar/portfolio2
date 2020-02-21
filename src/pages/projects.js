import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <li>/</li>
        <li className="menuactive">
            Projects
        </li>
    </ul>
  </div>
    <div className="content">
      <h1>These are his projects!</h1>
        <span className="ingress">Soon™ to be updated :)</span>
    {/* All of these projects have been team efforts. 
    <div className='projects'>
      <p>
        <h2>
          Pottery Jo
        </h2>
      So to explain what I did here...
      <h2>Creative Clowns</h2>
      Because here I did some other stuff...
      <h2>
        JSB, etc 
      </h2>
      And also.
      </p>
    </div>
  */}
  </div>        
  </Layout>
)

export default ProjectPage
