import React from 'react'
import PropTypes from 'prop-types'

import '../styles/normalize.css'
import '../styles/layout.css'
import '../styles/media.css'
import '../assets/css/font-awesome.min.css'

const Layout = ({ children }) => {
  return (
    <main>
      <div className="container">{children}</div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
