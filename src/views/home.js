import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import OutlineBlackButton from '../components/outline-black-button'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>GAMES!!!!!!!!!!!!!!!</title>
        <meta property="og:title" content="GAMES!!!!!!!!!!!!!!!" />
      </Helmet>
      <div data-role="Header" className="home-header">
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-top">
            <Link to="/" className="home-navlink Large">
              Soft UI Design System
            </Link>
            <div data-role="CloseMobileMenu" className="home-close-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="home-mid">
            <div className="home-menu">
              <Link to="/" className="home-navlink01 Large">
                Home
              </Link>
              <Link to="/profile" className="home-navlink02 Large">
                Profile
              </Link>
              <Link to="/coming-soon" className="home-navlink03 Large">
                Coming Soon
              </Link>
            </div>
          </div>
          <div className="home-bot">
            <PrimaryPinkButton Review="buy now"></PrimaryPinkButton>
          </div>
        </div>
      </div>
      <div className="home-hero">
        <div className="home-container01">
          <div id="About" className="home-card">
            <h1 className="home-text HeadingOne">Why us?</h1>
            <h1 className="home-text01 HeadingOne">Choose the best</h1>
            <span className="home-text02">
              <span className="Lead home-text03">
                Why us? You never ever get ads on our site so you can have the
                epicness! you can also get extra learning ablitys!
              </span>
              <br></br>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <div className="home-container04">
                  <div className="home-container05"></div>
                  <Link to="/read-more" className="home-navlink04">
                    <OutlineGrayButton
                      button="read more"
                      className="home-component1"
                    ></OutlineGrayButton>
                  </Link>
                </div>
              </div>
              <Link to="/games" className="home-navlink05">
                <h1 className="home-text05">GAMES!</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/playground_assets/download1-1500h.jpeg"
        className="home-image"
      />
      <section className="home-container06">
        <div className="home-container07"></div>
        <div className="home-container08">
          <div className="home-container09">
            <img
              alt="image"
              src="/playground_assets/download1-1500h.jpeg"
              className="home-image1"
            />
            <div className="home-container10"></div>
          </div>
          <div className="home-container11">
            <img
              alt="image"
              src="/playground_assets/fsbu6sphikv61-1100w.webp"
              className="home-image2"
            />
            <div className="home-container12"></div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container13">
          <div className="home-container14">
            <div className="home-container15">
              <h2 className="home-text06 HeadingOne">Work with us</h2>
              <p className="home-text07 Lead">
                Whatever your qualification is - we got you!
              </p>
              <p className="home-text08 Body">
                So you want to work with us. We have a few spots we need at
                certain times it will always be updated so click button below to
                get started!
              </p>
              <p className="home-text09">-Creator</p>
            </div>
          </div>
          <div className="home-logos"></div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image3"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <section className="home-contaier">
        <div className="home-container16">
          <div className="home-container17">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text10">competition</h2>
          <h3 className="home-text11 HeadingTwo">
            <span className="home-text12">How to beat them</span>
            <br></br>
          </h3>
        </div>
        <div className="home-container18">
          <div className="home-container19">
            <div className="home-container20"></div>
            <div className="home-container21">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon04">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text14">Website moderator</h1>
              <Link to="/job-mod" className="home-navlink06">
                <OutlineBlackButton
                  Getstarted="get started"
                  className="home-component2"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
          <div className="home-container22">
            <div className="home-container23">
              <h5 className="home-text15">1. Have more practice</h5>
              <span className="home-text16">
                If you have more experience you are more likely to be selected.??
              </span>
            </div>
            <div className="home-container24">
              <h5 className="home-text17">2. Be consistent????</h5>
              <span className="home-text18">
                If you get it always check up!
              </span>
            </div>
            <div className="home-container25">
              <h5 className="home-text19">3. Be nice</h5>
              <span className="home-text20">
                You are telling?? people to do stuff but be nice about it.
              </span>
            </div>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-container26">
          <div className="home-container27">
            <div className="home-container28">
              <h5 className="home-text21">Email your questions about jobs!</h5>
              <span>
                <span className="home-text23">
                  We will always try to answer on a fast and regular??
                </span>
                <br className="home-text24"></br>
                <span className="home-text25">time period!</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container29">
            <div className="home-container30"></div>
            <div className="home-container31">
              <svg viewBox="0 0 1152 1024" className="home-icon06">
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1 className="home-text27">
                <span className="HeadingOne">Email us</span>
                <br></br>
              </h1>
              <Link to="/e-m-a-i-l" className="home-navlink07">
                <OutlineBlackButton
                  Getstarted="get started"
                  className="home-component3"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-sidebar">
          <nav className="home-nav">
            <img
              alt="image"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              className="home-image4"
            />
            <Link to="/read-more" className="home-navlink08">
              About
            </Link>
            <Link to="/games" className="home-navlink09">
              Games
            </Link>
            <span className="home-text30">Log in</span>
            <span className="home-text31">Join us</span>
            <span>Blog</span>
          </nav>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon08">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon12">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-container32">
          <div className="home-container33">
            <span className="home-text33">SOFT</span>
            <span>Copyright ?? 2022?? by Gamesplus.</span>
          </div>
          <div className="home-container34">
            <div className="home-container35">
              <span className="home-text35 Large">Company</span>
              <a href="#About" className="home-link Large">
                About Us
              </a>
              <Link to="/job-mod" className="home-navlink10 Large">
                Careers
              </Link>
              <Link to="/" className="home-text36 Large">
                Press
              </Link>
            </div>
            <div className="home-container36">
              <span className="home-text37 Large">Pages</span>
              <span className="home-text38 Large">Login</span>
              <span className="home-text39 Large">Register</span>
              <span className="home-text40 Large">About</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image5"
        />
      </footer>
    </div>
  )
}

export default Home
