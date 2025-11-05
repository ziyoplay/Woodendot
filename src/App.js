import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Images from './components/Images';
import Section1 from './components/section1';

function App() {
  return (
    <div className="app-root">
      <Header />
      <Hero />
      <Features />
      <Images />
      <Section1 />
    </div>
  );
}

export default App;


