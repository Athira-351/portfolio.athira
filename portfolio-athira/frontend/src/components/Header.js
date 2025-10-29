import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you might want to add specific styles for the header

const Header = () => {
  return (
    <header className="glassy">
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;