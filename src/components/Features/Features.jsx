import React from 'react';
import './Features.css';

const FEATURES = [
  { title: 'Free Shipping', desc: 'Worldwide', img: '/images/IMAGE (18).png' },
  { title: 'Extended Return', desc: '60 days', img: '/images/IMAGE (21).png' },
  { title: 'Secure Payment', desc: 'SSL encrypted', img: '/images/IMAGE (20).png' },
  { title: 'Lifetime Warranty', desc: 'On structure', img: '/images/IMAGE (19).png' },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container features-row">
        {FEATURES.map((f, idx) => (
          <div className="feature" key={f.title}>
            <div className="icon" aria-hidden>
              <img src={f.img} alt={f.title} />
            </div>
            <div className="texts">
              <div className="feature-title">{f.title}</div>
            </div>
            {idx < FEATURES.length - 1 && <div className="divider" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;


