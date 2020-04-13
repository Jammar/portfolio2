import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ProBar from '../../components/ProBar'
import NavBar from '../../components/NavBar'
import Icons from '../../components/Icons'

const CountingOnwordsPage = () => (
  <Layout>
    <SEO title="The Counting Onwords project" />
    <NavBar />
    <ProBar />
    <header>
      <h1>Counting Onwords</h1>
    </header>
    <Icons
      details={[
        {
          key: 'githubIcon',
          anchor: 'https://github.com/Jammar/countingonwords',
          className: 'fa fa-github',
          text: 'Link to github source page',
          iconStyle: { fontSize: '2.2rem' },
        },
        {
          key: 'linkIcon',
          anchor: 'https://countingonwords.netlify.com',
          className: 'fa fa-external-link',
          text: 'Link to live page',
          iconStyle: { fontSize: '1.8rem', paddingTop: '0.3rem' },
        },
      ]}
    />
    <div className="content">
      <div id="row">
        <div className="column">
          <p>
            <h2>What</h2>
            Well it's just a simple and minimalistic site for counting the
            number of <strong>words</strong> and <strong>characters</strong>{' '}
            found in a text pasted into the textarea.
          </p>
        </div>
        <div className="column">
          <p>
            <h2>Why</h2>I wanted to practice using <strong>React Hooks</strong>.
            It is also a tribute to another site I've used during my whole time
            in Uni for counting characters/words in my exams and reports.
            <br />
            <br />
            Now I've got my own! Yey!{' '}
            {/* And I'm not in Uni anymore, also yey! */}
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default CountingOnwordsPage
