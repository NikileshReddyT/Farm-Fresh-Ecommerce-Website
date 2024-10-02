// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="header__logo-link">FarmFresh Market</Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><Link to="/" className="header__nav-link">Home</Link></li>
          <li className="header__nav-item"><Link to="/products" className="header__nav-link">Products</Link></li>
          <li className="header__nav-item"><Link to="/cart" className="header__nav-link">Cart</Link></li>
          <li className="header__nav-item"><Link to="/login" className="header__nav-link">Login</Link></li>
          <li className="header__nav-item"><Link to="/register" className="header__nav-link">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;