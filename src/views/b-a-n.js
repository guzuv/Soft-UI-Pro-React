import React from 'react'

import { Helmet } from 'react-helmet'

import './b-a-n.css'

const BAN = (props) => {
  return (
    <div className="b-a-n-container">
      <Helmet>
        <title>BAN - GAMES!!!!!!!!!!!!!!!</title>
        <meta property="og:title" content="BAN - GAMES!!!!!!!!!!!!!!!" />
      </Helmet>
      <h1 className="b-a-n-text">
        <span className="b-a-n-text1">
          The game was removed because there were reports from some of our mods
          that there was bad language. If you ever see this in a game PLEASE
          EMAIL
        </span>
        <br className="b-a-n-text2"></br>
        <span className="b-a-n-text3">helpline@gamesplus.ml</span>
        <br></br>
      </h1>
    </div>
  )
}

export default BAN
