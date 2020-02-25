import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import avatar from "../assets/images/profo-el-pictuehero.png"
import Socials from "../components/Socials"

const JoachimPage = () => (
  <Layout>
    <SEO title="Joachim" />
    <NavBar />
    <div className="content">
      <h1>This is Joachim</h1>
      <img className="avatar" src={avatar} alt="" />
      <div className="ingress">
        A Bachelor of Computer Science with <span>a focus on interaction design</span>.
      </div>
      < br/><br/>
      <p>
        I like to think, discuss and criticise UX as well as usability and accessability. But I also really like to code.
        Welcome to my simple page!
      </p>
    </div>
    <Socials />
  </Layout>
)

export default JoachimPage
