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
        className="games-link01"
      >
        <h1 className="games-text01">Get eating</h1>
      </a>
      <a
        href="https://pac-man-js.mallaja.repl.co/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link02"
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
        className="games-link03"
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
        className="games-link04"
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
        className="games-link05"
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
      <a
        href="https://spaceinvaders.calamari1.repl.co/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link06"
      >
        <h1 className="games-text22">
          <span className="games-text23">Space invaders </span>
          <br className="games-text24"></br>
          <span className="games-text25">      pew pew</span>
          <br></br>
        </h1>
      </a>
      <h1 className="games-text27">
        <span>We have lots of</span>
        <br></br>
        <span>
          Games here! (more coming soon) if there is a game you want to see and
          play just Email me! If we can&apos;t get the game you want we will
          notify you and give you a game close to the first.
        </span>
        <br></br>
      </h1>
      <a
        href="https://mario.abnumality.repl.co/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link07"
      >
        <img
          alt="image"
          src="https://assets.reedpopcdn.com/mario-movie-still.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/mario-movie-still.jpg"
          className="games-image3"
        />
      </a>
      <a
        href="https://mario.abnumality.repl.co/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link08"
      >
        <h1 className="games-text32">
          <span>    Mario</span>
          <br></br>
          <span>Chris pratt?</span>
          <br></br>
        </h1>
      </a>
      <a
        href="https://www.lumpty.com/amusements/Games/Tetris/tetris.html"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link09"
      >
        <h1 className="games-text37">
          <span>          Tetris</span>
          <br></br>
          <span>It hurts me brain</span>
          <br></br>
        </h1>
      </a>
      <Link to="/games2" className="games-navlink1">
        <h1 className="games-text42">
          <span className="games-text43">Next </span>
          <br className="games-text44"></br>
          <span className="games-text45">page</span>
          <br></br>
        </h1>
      </Link>
    </div>
  )
}

export default Games
