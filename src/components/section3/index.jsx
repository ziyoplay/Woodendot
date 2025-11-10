import React from 'react'
import './style.css'

const Section3 = () => {
  return (
    <section className='section3'>
        <div className="left">
            <h3>Alada</h3>
            <p className="section3-text-small">Floating folding desk</p>
            <p className="section3-text-price">From $534</p>
          <p className="section3-text">
          A timeless and discreet folding desk that
           seamlessly transforms into a decorative shelf in 
           seconds.
          </p>
          <p className="section3-options">+ 3 sizes, + 5 color finishes</p>
          <a href="#" className="shop-now-btn">shop now</a>
        </div>
        <div className="right">
          <img src="/images/IMAGE (7).png" alt="Modular oak sideboard in a warm interior" />
        </div>
    </section>
  )
}

export default Section3