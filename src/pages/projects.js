import React from "react"
import { Link } from "gatsby"

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
        <div className="ingress">
          All of these projects have been team efforts.
        </div>
    </div>       
  <ProMenu /> 
  </Layout>
)

export default ProjectPage
