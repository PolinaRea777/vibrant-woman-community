
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home'; 
import Events from './Events';

import ModelWorkshop from './ModelWorkshop';
import Contacts from './Contacts';
import logo from './newLogo.png'; 
import BusinessPR from './BusinessPR';
import AboutCreator from './AboutCreator';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          {/* Логотип */}
          <div className="nav-logo">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Vibrant Women Logo" className="logo-img" />
            </Link>
          </div>

          {/* Иконка гамбургера */}
          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Навигационное меню */}
          <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
            <li><Link to="/" className='link' onClick={closeMenu}>About <br />Creator</Link></li>
            <li><Link to="Home" className='link' onClick={closeMenu}>Vibrant Women<br /> Community</Link></li>
            <li><Link to="/Events" className='link' onClick={closeMenu}>Ladies <br /> Events</Link></li>
            <li><Link to="/BusinessPR" className='link' onClick={closeMenu}>Business<br /> PR</Link></li>
            <li><Link to="/ModelWorkshop" className='link' onClick={closeMenu}>Photo <br />Projects</Link></li>
            <li><Link to="/Contacts" className='link' onClick={closeMenu}>Contact<br /> Us</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<AboutCreator/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/BusinessPR" element={<BusinessPR />} />
        <Route path="/ModelWorkshop" element={<ModelWorkshop />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default Navigation;