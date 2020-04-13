import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ProBar from '../../components/ProBar'
import NavBar from '../../components/NavBar'
import Icons from '../../components/Icons'

const DropajobPage = () => (
  <Layout>
    <SEO title="The Drop a Job project" />
    <NavBar />
    <ProBar />
    <header>
      <h1>Drop a job!</h1>
    </header>

    <Icons
      details={[
        {
          key: 'githubIcon',
          anchor: 'https://github.com/Jammar/react-jobs-dragndrop',
          className: 'fa fa-github',
          text: 'Link to github source page',
          iconStyle: { fontSize: '2.2rem' },
        },
        {
          key: 'linkIcon',
          anchor: 'https://dropajob.netlify.com',
          className: 'fa fa-external-link',
          text: 'Link to live page',
          iconStyle: { fontSize: '1.8rem', paddingTop: '0.3rem' },
        },
      ]}
    />
    <div className="content">
      <div id="row">
        <div className="column">
          <h2>What</h2>
          <p>
            Site built with React. I used a drag and drop library called
            react-beautiful-dnd to make the site interactive and fun.
          </p>
          <p>
            Styled-components was used for styling since there is a lot of fuss
            about it. Still not sure if Emotion.css is better though.
          </p>
        </div>
        <div className="column">
          <h2>Why</h2>
          <p>
            Simple site built for fun, coming out to the job market in the midst
            of an oncurring pandemic.
          </p>
          <p>
            Fetch jobs from{' '}
            <a href="https://jobtechdev.se/en/docs/devguide/">JobTechDev API</a>
            , drag and drop them in the bin - relieve your stress!
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default DropajobPage
