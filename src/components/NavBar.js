import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavBar = ({ siteTitle }) => (
<div className='navbar'>
      <ul>
          <li>
            <Link activeStyle={{ textDecoration: 'underline' }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeStyle={{ textDecoration: 'underline' }} to="/joachim/">
              Who is
            </Link>
          </li>
          <li className="menuactive">
            <Link activeStyle={{ textDecoration: 'underline' }} to="/projects/">
              Which projects
            </Link>
          </li>
          <li>
            <Link activeStyle={{ textDecoration: 'underline' }} to="/about/">
              What about
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