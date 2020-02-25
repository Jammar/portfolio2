import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import ProMenu from "../components/ProMenu"

const ProjectPage = () => (
  <Layout>
    <SEO title="Projects" />
    <NavBar />
    <div className="content">
      <h1>These are his projects</h1>
    </div>
    <ProMenu />
    <div className="ingress">
      All of these projects have been team efforts.
    </div>       
  </Layout>
)

export default ProjectPage
