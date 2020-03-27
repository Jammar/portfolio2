import { Link } from "gatsby"
import React from "react"
import Icons from "../components/Icons"

const MainMenu = () => {
  const styleFadeOne = {animation: "fadein 0.7s"};
  const styleFadeTwo = {animation: "fadein 1.4s"};
  const styleFadeThree = {animation: "fadein 2.1s"};

  return <div className='mainmenu'>
    <ul>
        <li style={styleFadeOne}>
          <Link to="/joachim/">
            Who is Joachim
          </Link>
        </li>
        <li style={styleFadeTwo}>
          <Link to="/projects/">
            What are his projects
          </Link>
        </li>
    </ul>
    <Icons 
      ulStyle={styleFadeThree}
      details={[{
        key:"githubIcon",
        anchor:"https://github.com/Jammar",
        className:"fa fa-github",
        text:"Link to github page",
        iconStyle: {fontSize: "2.2rem"}
      },{
        key:"mailIcon",
        anchor: "mailto:joachim@hideaddress.net",
        className: "fa fa-envelope", 
        text: "Mailto-link to write email to the author",
        iconStyle: {paddingTop: "0.1rem"}}]}
    />
  </div>
}

export default MainMenu