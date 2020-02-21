import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavBar = ({ siteTitle }) => (
  <div className='navbar'>
    <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
        /
        <li>
          <Link to="/projects/">
            Projects
          </Link>
        </li>
        /
        <li>
          <Link to="/about/">
            About this site
          </Link>
        </li>
    </ul>
  </div>
)

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar