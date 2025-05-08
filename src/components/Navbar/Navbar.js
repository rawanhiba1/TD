import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="Trivoli Dome Logo" style={{ height: '56px', width: 'auto', display: 'block' }} />
        </Link>
        
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">Our Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact Us</Link>
          </li>
        </ul>

        <a href="https://wa.me/your-number" className="whatsapp-button">
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
      </div>
    </nav>
  );
}

export default Navbar; 