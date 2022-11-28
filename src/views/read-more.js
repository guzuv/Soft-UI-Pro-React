import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './read-more.css'

const ReadMore = (props) => {
  return (
    <div className="read-more-container">
      <Helmet>
        <title>Read-more - Soft UI Pro</title>
        <meta property="og:title" content="Read-more - Soft UI Pro" />
      </Helmet>
      <a
        href="https://www.youtube.com/watch?v=yJ7BHvOV1F4"
        target="_blank"
        rel="noreferrer noopener"
        className="read-more-link"
      >
        <img
          alt="image"
          src="/playground_assets/fsbu6sphikv61-300h.webp"
          className="read-more-image"
        />
      </a>
      <h1 className="read-more-text">
        If you ever see any ads just email us! We will try to fix the problem as
        fast as we can just tell us the game and more info we also will keep you
        updated
      </h1>
      <Link to="/" className="read-more-navlink">
        <h1 className="read-more-text1">Back home</h1>
      </Link>
    </div>
  )
}

export default ReadMore
