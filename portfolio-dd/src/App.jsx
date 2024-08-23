import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpaceSection } from './components/SpaceSection';
import { About } from './components/About';
import { SpaceSection01 } from './components/SpaceSection01';
import { Fotter } from './components/Fotter'; // Corrected spelling
import { Skills } from './components/Skills';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <SpaceSection />
      <About />
      <SpaceSection01 />
      <Skills />
    </>
  );
};

const PortfolioPage = () => {
  return(
  <>
        <About />
  </>
  );
};

export default App;
