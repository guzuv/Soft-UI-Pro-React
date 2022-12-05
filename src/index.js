import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Games2 from './views/games2'
import ReadMore from './views/read-more'
import MoreGames from './views/more-games'
import JobMod from './views/job-mod'
import EMAIL from './views/e-m-a-i-l'
import ComingSoon from './views/coming-soon'
import Profile from './views/profile'
import Games from './views/games'
import Page from './views/page'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Games2} exact path="/games2" />
        <Route component={ReadMore} exact path="/read-more" />
        <Route component={MoreGames} exact path="/more-games" />
        <Route component={JobMod} exact path="/job-mod" />
        <Route component={EMAIL} exact path="/e-m-a-i-l" />
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
