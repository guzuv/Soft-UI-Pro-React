import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">SOFT</span>
          <span>Copyright © 2022  by Gamesplus.</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text2 Large">Company</span>
            <Link to="/read-more" className="footer-navlink Large">
              About Us
            </Link>
            <Link to="/job-mod" className="footer-navlink1 Large">
              Careers
            </Link>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className="footer-image"
      />
    </footer>
  )
}

export default Footer
