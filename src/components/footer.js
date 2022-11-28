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
            <span className="footer-text02 Large">Company</span>
            <Link to="/read-more" className="footer-navlink Large">
              About Us
            </Link>
            <Link to="/job-mod" className="footer-navlink1 Large">
              Careers
            </Link>
            <Link to="/" className="footer-text03 Large">
              Press
            </Link>
          </div>
          <div className="footer-container4">
            <span className="footer-text04 Large">Pages</span>
            <span className="footer-text05 Large">Login</span>
            <span className="footer-text06 Large">Register</span>
            <span className="footer-text07 Large">About</span>
          </div>
          <div className="footer-container5">
            <span className="footer-text08 Large">Products</span>
            <span className="footer-text09 Large">Free</span>
            <span className="footer-text10 Large">PRO</span>
            <span className="footer-text11 Large">Latest</span>
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
