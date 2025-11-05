import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg" role="img" aria-label="Furniture in a modern bedroom" />
      <div className="hero-overlay" />
      <div className="hero-inner container">
        <h1>Furniture designed to live in harmony, creating distinctive and <br /> timeless spaces</h1>
        <button className="btn-primary">Discover more</button>
      </div>
    </section>
  );
};

export default Hero;


