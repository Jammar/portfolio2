import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MainMenu from '../components/NavBar'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="welcome">
      <h1>NOT FOUND</h1>
    </div>
    <div className="content">
      <p className="ingress">
        You just hit a page that doesn&#39;t exist. Try one of these:
      </p>
    </div>
    <MainMenu />
  </Layout>
)

export default NotFoundPage
