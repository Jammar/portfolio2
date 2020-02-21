import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div className='navbar'>
    <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>/</li>
        <li className="menuactive">
            Projects
        </li>
    </ul>
  </div>
    
    
    {/* All of these projects have been team efforts. */}
    <div className="content">
      <h1>Projects</h1>
      <p>
        Soon™ to be updated :)

        <h2>General experience</h2>

        In most projects I've worked with tools such as: <br/><br/>
        <b>Github</b>        –   For sharing codebase, repos<br/><br/>
        <b>Trello</b>        –   Agile, task broken down in smaller tasks (kanban or something alike)<br/><br/>
        <b>Toggl</b>         –     For timing each task and produce time reports<br/><br/>
        <b>Google Hangouts</b> -   Since I've worked with colleagues remotely, mic/camera and share screen<br/><br/>
        <b>Adobe XD</b>    – for design sketches and converting design to production<br/><br/>
      </p>
    </div>
  </Layout>
)

export default ProjectPage
