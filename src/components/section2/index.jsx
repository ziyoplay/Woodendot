import React from 'react'
import './style.css'

const Section2 = () => {
  return (
    <section className='section2'>
        <div className="left">
          <img src="/images/IMAGE (8).png" alt="Pelican Shelves with hidden hooks" />
        </div>
        <div className="right">
            <h3>Pelican</h3>
            <p className="section2-text-small">Shelves with hidden hooks</p>
            <p className="section2-text-price">From $89</p>
          <p className="section2-text">
            Store or exhibit your favorite objects in the entrance hall, modern hallways, living rooms and bedrooms with a <i>decorative and minimalist</i> touch.
          </p>
          <p className="section2-options">+ 3 sizes, + 5 color finishes</p>
          <a href="#" className="shop-now-btn">shop now</a>
        </div>
    </section>
  )
}

export default Section2