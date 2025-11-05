import React from 'react'
import './style.css'

const Section1 = () => {
  return (
    <section className='section1'>
        <div className="left">
            <h3>Cloe</h3>
            <p className="section1-text-small">Modular Storage System</p>
            <p className="section1-text-price">From $1.176</p>
          <p className="section1-text">
            An <i>expansive</i> way to furnish your space exactly how you
            need it and like it. Transform it in exactly what you need
            like a bookshelf, tv stand or show rack, you pick.
          </p>
          <a href="#" className="shop-now-btn">shop now</a>
        </div>
        <div className="right">
          <img src="/images/IMAGE (9).png" alt="Modular oak sideboard in a warm interior" />
        </div>
    </section>
  )
}

export default Section1