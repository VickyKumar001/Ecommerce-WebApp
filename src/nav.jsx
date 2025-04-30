import React from 'react';
import './nav.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-brand">ShopStroll</h1>
        <ul className="navbar-links">
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
