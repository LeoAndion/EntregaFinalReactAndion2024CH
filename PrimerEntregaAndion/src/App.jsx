import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return(
    <div>
      <Navbar/>
      <ItemListContainer/>

    </div>
  )
}

export default App
