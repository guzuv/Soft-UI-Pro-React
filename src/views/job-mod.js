import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './job-mod.css'

const JobMod = (props) => {
  return (
    <div className="job-mod-container">
      <Helmet>
        <title>JobMod - GAMES!!!!!!!!!!!!!!!</title>
        <meta property="og:title" content="JobMod - GAMES!!!!!!!!!!!!!!!" />
      </Helmet>
      <Link to="/" className="job-mod-navlink">
        <h1 className="job-mod-text">COMING SOON</h1>
      </Link>
    </div>
  )
}

export default JobMod
