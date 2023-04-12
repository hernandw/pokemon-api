

import './App.css'

import React from 'react'
import NavBar from './components/NavBar'
import { PokemonProvider } from './components/context/MyContext'
import AppRouter from './components/router/AppRouter'

const App = () => {
  return (
    <div>
      <PokemonProvider>
      <NavBar />
      <AppRouter />
      </PokemonProvider>
    </div>
  )
}

export default App
