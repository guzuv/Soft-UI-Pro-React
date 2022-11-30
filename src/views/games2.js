import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './games2.css'

const Games2 = (props) => {
  return (
    <div className="games2-container">
      <Helmet>
        <title>Games2 - GAMES!!!!!!!!!!!!!!!</title>
        <meta property="og:title" content="Games2 - GAMES!!!!!!!!!!!!!!!" />
      </Helmet>
      <a
        href="https://www.lumpty.com/amusements/Games/Tetris/tetris.html"
        target="_blank"
        rel="noreferrer noopener"
        className="games2-link"
      >
        <img
          alt="image"
          src="https://s3.amazonaws.com/tetris-www1/assets/article/2017/06/14/tetris-lingo-feature_feature.jpg"
          className="games2-image"
        />
      </a>
      <a
        href="https://www.lumpty.com/amusements/Games/Tetris/tetris.html"
        target="_blank"
        rel="noreferrer noopener"
        className="games2-link1"
      >
        <h1 className="games2-text">
          <span>          Tetris</span>
          <br></br>
          <span>It hurts me brain</span>
          <br></br>
        </h1>
      </a>
      <Link to="/games" className="games2-navlink">
        <h1 className="games2-text05">
          <span>BACK TO</span>
          <br></br>
          <span>GAMES 1</span>
          <br></br>
        </h1>
      </Link>
      <Link to="/" className="games2-navlink1">
        <h1 className="games2-text10">Back home</h1>
      </Link>
    </div>
  )
}

export default Games2
