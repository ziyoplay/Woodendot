import React from 'react';
import './style.css';

const FOOTER_LINK_GROUPS = [
  {
    title: 'ABOUT',
    links: [
      'About Us',
      'Design',
      'Sustainability',
      'We plant trees',
      'Our Story',
      'Awards',
    ],
  },
  {
    title: 'HELP',
    links: [
      'Holiday Offers FAQ',
      'FAQ',
      'Warranty',
      'Shipments',
      'Returns & Claims',
      'Contact us',
    ],
  },
  {
    title: 'MORE',
    links: [
      'Where to find us',
      'Woodendot Family',
      'Press',
      'Affiliates',
      'Video Lifestyle',
    ],
  },
];

const PAYMENT_METHODS = ['VISA', 'PayPal', 'Mastercard', 'American Express', 'Klarna'];

const TRUST_BADGES = [
  { id: 'fsc', label: 'FSC' },
  { id: 'one-tree', label: 'One Tree Planted' },
];

const RATING_STARS = 5;

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-columns">
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title} className="footer-column">
              <h3 className="footer-title">{group.title}</h3>
              <ul className="footer-list">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-newsletter">
          <p className="newsletter-heading">Don’t miss any news and exclusive offers!</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Newsletter subscription"
              aria-label="Newsletter subscription"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>

          <div className="footer-certifications">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.id} className="badge-card" aria-label={badge.label}>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="footer-rating" aria-label="Trustpilot rating">
            <div className="rating-stars">
              {Array.from({ length: RATING_STARS }).map((_, idx) => (
                <span key={idx} className="star" aria-hidden>
                  ★
                </span>
              ))}
            </div>
            <span className="rating-label">Trustpilot</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© Copyright – WOODENDOT 2021</p>

        <div className="payment-icons" aria-label="Payment methods">
          {PAYMENT_METHODS.map((method) => (
            <span key={method}>{method}</span>
          ))}
        </div>

        <div className="footer-links-inline">
          <a href="#" className="inline-link">
            Terms & Conditions
          </a>
          <span aria-hidden>|</span>
          <a href="#" className="inline-link">
            Privacy Policy & Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
