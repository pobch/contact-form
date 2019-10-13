import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import NotFound from './NotFound'
import LocationDisplay from './LocationDisplay'

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
