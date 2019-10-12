import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import NotFound from './NotFound'

function Pages() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Pages
