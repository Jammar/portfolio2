import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainMenu from "../components/MainMenu"

const IndexPage = () => (
  <Layout>
      <div className='navbar'>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>/</li>
        </ul>
      </div>
    {/* <NavBar /> */}
    <SEO title="Home" />
    <h1>Välkommen</h1>
    <MainMenu />
  </Layout>
)

export default IndexPage
