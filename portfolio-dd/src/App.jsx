import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpaceSection } from './components/SpaceSection';
import { About } from './components/About';
import { SpaceSection01 } from './components/SpaceSection01';
import { Fotter } from './components/Fotter';
import { Skills } from './components/Skills';
import Portfolio from './components/Portfolio';
import Portfolio2 from './components/Portfolio2';
import { Port_Section } from './components/Port_Section';
import { Port_Section2 } from './components/Port_Section2';


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
    <div id='Pstart' className="app-background">
      <br /><br /><br /><br /><br /><br /><br />
      <Port_Section></Port_Section>
      <Portfolio></Portfolio>
      <br /><br />
      <Port_Section2></Port_Section2>
      <Portfolio2></Portfolio2>
    </div>
  </>
  );
};

export default App;
