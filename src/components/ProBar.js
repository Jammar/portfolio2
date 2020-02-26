import { Link } from "gatsby"
import React from "react"

const ProBar = () => (
  <div className='navbar probar'>
    <ul>
        <li>
          <Link activeStyle={{ textDecoration: 'underline' }} to="/potter/">
            Potter
          </Link>
        </li>
        <li>
          <Link activeStyle={{ textDecoration: 'underline' }} to="/clowns/">
            Clowns
          </Link>    
        </li>
        <li>
          <Link activeStyle={{ textDecoration: 'underline' }} to="/builders/">
            Builders
          </Link>    
        </li>
    </ul>
  </div>
)

export default ProBar