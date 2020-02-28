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
              Who is
            </Link>
          </li>
          <li className="menuactive">
            <Link 
              activeStyle={{ textDecoration: 'underline' }} 
              partiallyActive={true}
              to="/projects/">
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

export default NavBar