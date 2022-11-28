import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './games.css'

const Games = (props) => {
  return (
    <div className="games-container">
      <Helmet>
        <title>Games - Soft UI Pro</title>
        <meta property="og:title" content="Games - Soft UI Pro" />
      </Helmet>
      <a
        href="https://pac-man-js.mallaja.repl.co/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link"
      >
        <h1 className="games-text">pac-man</h1>
      </a>
      <a
        href="https://pac-man-js.mallaja.repl.co/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link1"
      >
        <h1 className="games-text1">Get eating</h1>
      </a>
      <a
        href="https://pac-man-js.mallaja.repl.co/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link2"
      >
        <img
          alt="image"
          src="/playground_assets/apps.39946.64038775097837221.dc6e1021-8d55-4bb8-acc7-b88fb8d47e71-200h.jpeg"
          className="games-image"
        />
      </a>
      <Link to="/" className="games-navlink">
        <h1 className="games-text2">Back home</h1>
      </Link>
    </div>
  )
}

export default Games
