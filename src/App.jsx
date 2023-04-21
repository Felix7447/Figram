import React from 'react'

import './styles/App.css'

import { Home } from './pages/Home'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Logo />
      <Home />
      <NavBar />
    </div>
  )
}

export default App
