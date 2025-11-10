import React from 'react'
import './style.css'

const Section5 = () => {
  return (
    <section className='section5'>
        <div className="left">
            <h3>Batea Collection</h3>
            <p className="section5-text-small">Tables with storage</p>
            <p className="section5-text-price">From $720</p>
          <p className="section5-text">
          Composed of clean and rounded lines, the Batea 
          Collection includes unique tables with extra
           functionality like a pull-out tray, and hidden 
           storage.
          </p>
          <p className="section5-options">+ 3 sizes, + 6 color finishes</p>
          <a href="#" className="shop-now-btn">shop now</a>
        </div>
        <div className="right">
          <img src="/images/IMAGE (9).png" alt="Modular oak sideboard in a warm interior" />
        </div>
    </section>
  )
}

export default Section5