import React from 'react'
import './style.css'

const Section4 = () => {
  return (
    <section className='section4'>
        <div className="left">
          <img src="/images/IMAGE (11).png" alt="Alba Collection - Modular bedside table & shelf" />
        </div>
        <div className="right">
            <h3>Alba Collection</h3>
            <p className="section4-text-small">Modular bedside table & shelf</p>
            <p className="section4-text-price">From $272</p>
          <p className="section4-text">
            A versatile and modular piece with a <i>sculptural touch</i> that can be used as a wall shelf or as a bedside table with concealed storage.
          </p>
          <p className="section4-options">+ 6 color finishes, infinite combinations</p>
          <a href="#" className="shop-now-btn">shop now</a>
          <div className="awards">
            <img src="/images/Frame (1).png" alt="IDA Design Awards 2018" />
            <img src="/images/Frame (2).png" alt="IDA Design Awards 2018" />
            <img src="/images/Frame (3).png" alt="European Product Design Award" />
          </div>
        </div>
    </section>
  )
}

export default Section4

