import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image1 from "../images/accessible-colors.jpg"

const PotterPage = () => (
  <Layout>
    <SEO title="The Potter project" />
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
    <div className='navbar probar'>
      <ul>
          <li className="menuactive">
            <Link to="/potter/">
              Potter
            </Link>
          </li>
          <li>
            <Link to="/clowns/">
              Clowns
            </Link>    
          </li>
          <li>
            <Link to="/builders/">
              Builders
            </Link>    
          </li>
      </ul>
    </div>
    <div className="content">
      <h1>The Potter project</h1>
      <span className="ingress">
        Soon™ to be updated :) 
      </span>
      <div id="row">
        <div className="column">
        </div>
      </div>
    </div>
  </Layout>
)

export default PotterPage