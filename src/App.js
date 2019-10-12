import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/*.js</code> files and save to auto-reload.
        </p>
        <span>Pages :</span>
        <Link className="App-link" to="/contact">
          Contact
        </Link>
      </header>
    </div>
  )
}

export default App
