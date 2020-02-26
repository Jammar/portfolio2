import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProBar from "../components/ProBar"
import NavBar from "../components/NavBar"

const PotterPage = () => (
  <Layout>
    <SEO title="The Potter project" />
    <NavBar />
    <ProBar />
    <div className="content">
      <h1>The Potter project</h1>
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

export default PotterPage