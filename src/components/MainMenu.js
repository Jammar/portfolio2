import { Link } from "gatsby"
import React from "react"
import Icons from "../components/Icons"

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
    </ul>
    <Icons 
      details={[{
        key:"githubIcon",
        anchor:"https://github.com/Jammar",
        className:"fa fa-github",
        text:"Link to github page"
      },{
        key:"mailIcon",
        anchor: "mailto:joachim@hideaddress.net",
        className: "smallerIcon fa fa-envelope", 
        text: "Mailto-link to write email to the author"}]}
    />
  </div>
)

export default MainMenu