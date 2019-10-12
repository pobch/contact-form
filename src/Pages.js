import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Contact from './Contact'

function Pages() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default Pages
