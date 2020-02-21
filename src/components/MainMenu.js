import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const MainMenu = ({ siteTitle }) => (
  <div className='mainmenu'>
    <ul>
        <li>
          <Link to="/joachim">
            Who is Joachim
          </Link>
        </li>
        <li>
          <Link to="/projects/">
            What are his projects
          </Link>
        </li>
        <li>
          <Link to="/about/">
            What about this site
          </Link>
        </li>
    </ul>
  </div>
)

MainMenu.propTypes = {
  siteTitle: PropTypes.string,
}

MainMenu.defaultProps = {
  siteTitle: ``,
}

export default MainMenu