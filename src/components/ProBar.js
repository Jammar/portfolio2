import { Link } from "gatsby"
import React from "react"

const ProBar = () => (
  <div className='navbar probar'>
    <ul>
        <li>
          <Link activeStyle={{ textDecoration: 'underline' }} to="/projects/potter/">
            Potter
          </Link>
        </li>
        <li>
          <Link activeStyle={{ textDecoration: 'underline' }} to="/projects/clowns/">
            Clowns
          </Link>    
        </li>
        <li>
          <Link activeStyle={{ textDecoration: 'underline' }} to="/projects/builders/">
            Builders
          </Link>    
        </li>
    </ul>
  </div>
)

export default ProBar