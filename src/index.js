import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ReadMore from './views/read-more'
import JobMod from './views/job-mod'
import ComingSoon from './views/coming-soon'
import Profile from './views/profile'
import Games from './views/games'
import Page from './views/page'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ReadMore} exact path="/read-more" />
        <Route component={JobMod} exact path="/job-mod" />
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Games} exact path="/games" />
        <Route component={Page} exact path="/page" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
