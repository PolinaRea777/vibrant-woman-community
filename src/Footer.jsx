import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-simple">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">
            <h2 className="playfair">Beauty Creation LLC</h2>
            <p className="footer-slogan">Empowering Women, Building Connections</p>
            {/* <p>Miami Community</p> */}
          </div>
          
          <nav className="footer-nav">
            <Link to="/">About <br />Creator</Link>
            <Link to="Home">Vibrant Women <br />Community</Link>
            <Link to="/events">Ladies<br /> Events</Link>
            <Link to="/BusinessPR">Business<br /> PR</Link>
            <Link to="/ModelWorkshop">Photo<br /> Projects</Link>
            <Link to="/contacts">Contact <br />Us</Link>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Beauty Creation LLC. All rights reserved</p>
          <div className="footer-legal">
            <span>Miami, FL</span>
          </div>
          <div className="footer-credits">
    Designed & Developed by <a href="https://instagram.com/just_polina1" target="_blank" rel="noreferrer">Polina Rea</a>
  </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;