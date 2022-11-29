import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - GAMES!!!!!!!!!!!!!!!</title>
        <meta property="og:title" content="Page - GAMES!!!!!!!!!!!!!!!" />
      </Helmet>
      <h1 className="page-pac-man">Heading</h1>
    </div>
  )
}

export default Page
