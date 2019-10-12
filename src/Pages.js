import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import NotFound from './NotFound'

const LocationDisplay = withRouter(({ location }) => (
  <div style={{ position: 'fixed', bottom: 0 }} data-testid="location-display">
    {location.pathname}
  </div>
))

function Pages() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <LocationDisplay />
    </div>
  )
}

export default Pages
