import { Link } from "gatsby"
import React from "react"

const MainMenu = () => (
  <div className='mainmenu'>
    <ul>
        <li>
          <Link to="/joachim/">
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

export default MainMenu