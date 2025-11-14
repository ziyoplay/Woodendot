import React from 'react';
import './style.css';

const VALUES = [
  {
    id: 'design',
    title: 'DESIGN',
    description:
      'We create furniture pieces with personality, designed to transform your space.',
    image: '/images/IMAGE (15).png',
    link: '#',
  },
  {
    id: 'footprint',
    title: 'FOOTPRINT',
    description: 'We are committed to look after what we love, nature.',
    image: '/images/IMAGE (16).png',
    link: '#',
  },
  {
    id: 'made',
    title: 'MADE',
    description:
      'Our local design, and production in the village of Iscar, Spain.',
    image: '/images/IMAGE (17).png',
    link: '#',
  },
  {
    id: 'wood',
    title: 'WOOD',
    description:
      'Our characteristic and main material, and its unique and timeless attributes.',
    image: '/images/IMAGE (18).png',
    link: '#',
  },
];

const ValueCard = ({ item }) => {
  return (
    <article className="value-card">
      <div className="value-image-wrapper">
        <img src={item.image} alt={item.title} className="value-image" />
      </div>
      <h3 className="value-title">{item.title}</h3>
      <p className="value-description">{item.description}</p>
      <a className="value-link" href={item.link}>
        Learn More
      </a>
    </article>
  );
};

const Values = () => {
  return (
    <section className="values-section">
      <div className="values-grid">
        {VALUES.map((value) => (
          <ValueCard key={value.id} item={value} />
        ))}
      </div>
    </section>
  );
};

export default Values;
