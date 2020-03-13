import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import Avatar from "../components/Avatar"

const JoachimPage = () => {
  return (
    <Layout>
    <SEO title="Joachim" />
    <NavBar />
    <div className="content">
      <h1>This is Joachim</h1>
        <Avatar />
      <p>
        An interaction designer and developer who likes to think, discuss and criticise UX... but sometimes just wants code. 
      </p>
      <div className="ingress">
      Welcome to this very simple page!
      </div>
    </div>
  </Layout>
  )
}

export default JoachimPage
