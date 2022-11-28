import React from 'react'

import { Helmet } from 'react-helmet'

import './e-m-a-i-l.css'

const EMAIL = (props) => {
  return (
    <div className="e-m-a-i-l-container">
      <Helmet>
        <title>EMAIL - Soft UI Pro</title>
        <meta property="og:title" content="EMAIL - Soft UI Pro" />
      </Helmet>
    </div>
  )
}

export default EMAIL
