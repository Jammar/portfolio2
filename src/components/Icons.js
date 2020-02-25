import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Icons = ({ siteTitle }) => (
<div className="socials">
  <ul className="icons">
      <li>
          <a href="https://github.com/Jammar" className="fa fa-github" alt="Link to github page">
              <span className="label">Link to github page</span>
          </a>
      </li>
      <li>
          <a href="mailto:joachim@hideaddress.net" className="fa fa-at" alt="Mailto-link to author">
              <span className="label">Mailto-link to write email to the author</span>
          </a>
      </li>
  </ul>
</div>
)

Icons.propTypes = {
  siteTitle: PropTypes.string,
}

Icons.defaultProps = {
  siteTitle: ``,
}

export default Icons