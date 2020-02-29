import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import Icons from "../components/Icons"
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
        I'm an interaction designer and developer who likes to think, discuss and criticise UX. But I also really like to code. Welcome to my simple page!
      </p>
    </div>
    <Icons />
  </Layout>
  )
}

export default JoachimPage
