import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SpaceSection } from './components/SpaceSection'
import { About } from './components/About'
import { SpaceSection01 } from './components/SpaceSection01'
import { Fotter } from './components/Fotter'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Hero/>
    <SpaceSection/>
    <About/>
    <SpaceSection01/>
    <Fotter/>
    </BrowserRouter>
    </>
  )
}

export default App