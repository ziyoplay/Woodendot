import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Values from './components/values';
import Press from './components/press';
import Images from './components/Images';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Idk from './components/idk';
import Idk2 from './components/idk2';
import Footer from './components/footer';

function App() {
  return (
    <div className="app-root">
      <Header />
      <Hero />
      <Features />
      <Images />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Idk />
      <Idk2 />
      <Press />
      <Values />
      <Footer />
    </div>
  );
}

export default App;


