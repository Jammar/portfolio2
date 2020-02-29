import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import ProMenu from "../components/ProMenu"

const ProjectPage = () => (
  <Layout>
    <SEO title="Projects" />
    <NavBar />
      <h1>These are his projects</h1>
    <ProMenu />
  </Layout>
)

export default ProjectPage
