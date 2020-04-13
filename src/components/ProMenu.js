import { Link } from 'gatsby'
import React from 'react'

const ProjectMenu = () => {
  const styleFadeOne = { animation: 'fadein 0.7s' }
  const styleFadeTwo = { animation: 'fadein 1.4s' }
  const styleFadeThree = { animation: 'fadein 2.1s' }

  return (
    <div className="promenu">
      <ul>
        <li style={styleFadeOne}>
          <Link to="/projects/thissite/">This site</Link>
        </li>
        <li style={styleFadeTwo}>
          <Link to="/projects/countingonwords/">Counting onwords</Link>
        </li>
        <li style={styleFadeThree}>
          <Link to="/projects/dropajob/">Drop a job</Link>
        </li>
      </ul>
    </div>
  )
}

export default ProjectMenu
