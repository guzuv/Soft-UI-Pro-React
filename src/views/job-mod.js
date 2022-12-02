import React from 'react'

import { Helmet } from 'react-helmet'

import './job-mod.css'

const JobMod = (props) => {
  return (
    <div className="job-mod-container">
      <Helmet>
        <title>JobMod - GAMES!!!!!!!!!!!!!!!</title>
        <meta property="og:title" content="JobMod - GAMES!!!!!!!!!!!!!!!" />
      </Helmet>
      <a
        href="mailto:helpline@gamesplus.ml?subject=Job"
        className="job-mod-link"
      >
        <h1 className="job-mod-text">
          If you want a job Email helpline@gamesplus.ml
        </h1>
      </a>
    </div>
  )
}

export default JobMod
