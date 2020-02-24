import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainMenu from "../components/MainMenu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Välkommen</h1>
    <MainMenu />
  </Layout>
)

export default IndexPage
