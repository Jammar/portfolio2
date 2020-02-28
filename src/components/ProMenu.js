import { Link } from "gatsby"
import React from "react"

const ProjectMenu = () => (
  <div className='promenu'>
    <ul>
        <li>
          <Link to="/projects/potter/">
            Potter
          </Link>
        </li>
        <li>
          <Link to="/projects/clowns/">
            Clowns
          </Link>
        </li>
        <li>
          <Link to="/projects/builders/">
            Builders
          </Link>
        </li>
    </ul>
  </div>
)

export default ProjectMenu