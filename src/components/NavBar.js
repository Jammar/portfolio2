import { Link } from "gatsby"
import React from "react"

const NavBar = () => (
<div className='navbar'>
      <ul>
          <li>
            <Link activeStyle={{ textDecoration: 'underline' }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeStyle={{ textDecoration: 'underline' }} to="/joachim/">
              Who <span className="mobileNoShow">is</span>
            </Link>
          </li>
          <li className="menuactive">
            <Link 
              activeStyle={{ textDecoration: 'underline' }} 
              partiallyActive={true}
              to="/projects/">
              <span className="mobileNoShow">Which</span> projects
            </Link>
          </li>
      </ul>
    </div>
)

export default NavBar