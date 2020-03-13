import { Link } from "gatsby"
import React from "react"

const ProjectMenu = () => (
  <div className='promenu'>
    <ul>
        <li>
          <Link to="/projects/thissite/">
            This site
          </Link>
        </li>
        <li>
          <Link to="/projects/younai/">
            Projects with Younai
          </Link>
        </li>
        <li>
          <Link to="/projects/countingonwords/">
            Counting onwords
          </Link>
        </li>
    </ul>
  </div>
)

export default ProjectMenu