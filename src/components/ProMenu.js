import { Link } from "gatsby"
import React from "react"

const ProjectMenu = () => (
  <div className='promenu'>
    <ul>
        <li>
          <Link to="/potter/">
            Potter
          </Link>
        </li>
        <li>
          <Link to="/clowns/">
            Clowns
          </Link>
        </li>
        <li>
          <Link to="/builders/">
            Builders
          </Link>
        </li>
    </ul>
  </div>
)

export default ProjectMenu