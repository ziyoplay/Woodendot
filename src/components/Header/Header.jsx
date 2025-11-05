import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="wd-header">
      <div className="container">
        <nav className="nav">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#stories">Stories</a>
        </nav>
        <div className="brand">Woodendot</div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;


