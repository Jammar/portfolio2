import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProBar from "../components/ProBar"
import NavBar from "../components/NavBar"

// import Image1 from "../images/accessible-colors.jpg"

const ClownsPage = () => (
  <Layout>
    <SEO title="The Clowns project" />
    <NavBar />
    <ProBar />
    <div className="content">
      <h1>The Clowns project</h1>
      <div className="ingress">
        Soon™ to be updated :) 
      </div>
      <div id="row">
        <div className="column">
        </div>
      </div>
    </div>
  </Layout>
)

export default ClownsPage