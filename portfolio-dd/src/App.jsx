import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SpaceSection } from './components/SpaceSection'
import { About } from './components/About'
import { SpaceSection01 } from './components/SpaceSection01'
import { Fotter } from './components/Fotter'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <SpaceSection/>
    <About/>
    <SpaceSection01/>
    <Fotter/>
    </>
  )
}

export default App