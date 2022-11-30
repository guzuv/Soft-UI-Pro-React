import React from 'react'

import { Helmet } from 'react-helmet'

import './e-m-a-i-l.css'

const EMAIL = (props) => {
  return (
    <div className="e-m-a-i-l-container">
      <Helmet>
        <title>EMAIL - GAMES!!!!!!!!!!!!!!!</title>
        <meta property="og:title" content="EMAIL - GAMES!!!!!!!!!!!!!!!" />
      </Helmet>
      <h1 className="e-m-a-i-l-text">
        <span>
             
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="e-m-a-i-l-text2">     The email is </span>
        <br className="e-m-a-i-l-text3"></br>
        <span className="e-m-a-i-l-text4">helpline@gamesplus.ml</span>
        <br></br>
      </h1>
    </div>
  )
}

export default EMAIL
