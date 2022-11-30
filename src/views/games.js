import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './games.css'

const Games = (props) => {
  return (
    <div className="games-container">
      <Helmet>
        <title>Games - GAMES!!!!!!!!!!!!!!!</title>
        <meta property="og:title" content="Games - GAMES!!!!!!!!!!!!!!!" />
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
        <h1 className="games-text01">Get eating</h1>
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
        <h1 className="games-text02">
          <span>Back</span>
          <br></br>
          <span>HOME</span>
          <br></br>
          <br></br>
        </h1>
      </Link>
      <h1 className="games-text08">
        <br></br>
        <br></br>
      </h1>
      <a
        href="https://1v1lol.56306.repl.co/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link3"
      >
        <h1 className="games-text11">
          <span>
             
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="games-text13">1v1.lol</span>
          <br className="games-text14"></br>
          <span className="games-text15">Fartnight?</span>
          <br></br>
        </h1>
      </a>
      <a
        href="https://1v1lol.56306.repl.co/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link4"
      >
        <img
          alt="image"
          src="/playground_assets/channels4_profile-200h.jpg"
          className="games-image1"
        />
      </a>
      <a
        href="https://spaceinvaders.calamari1.repl.co/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link5"
      >
        <h1 className="games-text17">
          <span className="games-text18">Space invaders </span>
          <br className="games-text19"></br>
          <span className="games-text20">      pew pew</span>
          <br></br>
        </h1>
      </a>
      <img
        alt="image"
        src="https://upload.wikimedia.org/wikipedia/en/0/0f/Space_Invaders_flyer%2C_1978.jpg"
        className="games-image2"
      />
    </div>
  )
}

export default Games
