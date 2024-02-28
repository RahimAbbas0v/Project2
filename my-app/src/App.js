import React from 'react'
import Navbar from './components/navbar/Navbar'
import FreeShipping from './components/freeShipping/FreeShipping'
import HandMade from './components/handMade/HandMade'
import Bestsellers from "./components/bestsellers/Bestsellers"
import DecorItems from './components/decorItems/DecorItems'
function App() {
  return (
    <>
    <Navbar/>
    <FreeShipping/>
    <HandMade/>
    <Bestsellers/>
    <DecorItems/>
    </>
  )
}

export default App

