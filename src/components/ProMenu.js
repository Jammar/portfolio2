import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ProjectMenu = ({ siteTitle }) => (
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

ProjectMenu.propTypes = {
  siteTitle: PropTypes.string,
}

ProjectMenu.defaultProps = {
  siteTitle: ``,
}

export default ProjectMenu