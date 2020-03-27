import { Link } from "gatsby"
import React from "react"

const ProBar = () => (
  <div className='navbar probar'>
    <ul>
        <li>
          <Link activeStyle={{ textDecoration: 'underline' }} to="/projects/thissite/">
            This <span className="mobileNoShow">site</span>
          </Link>
        </li>
{/*         <li>
          <Link activeStyle={{ textDecoration: 'underline' }} to="/projects/younai/">
            Younai
          </Link>
        </li> */}
        <li>
          <Link activeStyle={{ textDecoration: 'underline' }} to="/projects/countingonwords/">
            Counting <span className="mobileNoShow">Onwords</span>
          </Link>    
        </li>
    </ul>
  </div>
)

export default ProBar