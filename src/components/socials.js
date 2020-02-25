import React from "react"
import { IoLogoGithub } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

class Socials extends React.Component {
    render() {
        return <div className="socials">
            <ul className="icons">
                <li>
                    <a href="https://github.com/Jammar">
                        <IoLogoGithub />
                    </a>
                </li>
                <li>
                    <a href="mailto:joachim@hideaddress.net">
                        <MdEmail />
                    </a>
                </li>
            </ul>
        </div>
    }
}

export default Socials