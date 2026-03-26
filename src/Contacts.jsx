import React from 'react';
import './Contacts.css';

function Contacts() {
  return (
    <div className="home-container">
      <section className="hero-section" style={{minHeight: '40vh', marginBottom: '40px'}}>
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-intro">
            Have questions? <span>Let's get in touch</span>. We are always open to new members and collaborations.
          </p>
        </div>
      </section>

      <div className="contact-grid">
  {/* Карточка: WhatsApp — теперь вся карточка кликабельна */}
  <a href="https://wa.me/17866205862" target="_blank" rel="noreferrer" className="contact-card-link">
    <div className="contact-card">
      <div className="contact-icon">📱</div>
      <h3>WhatsApp</h3>
      <p>Polina Krechina-Munteanu</p>
      <span className="contact-link-text">+1 (786) 620-5862</span>
    </div>
  </a>

  {/* Карточка: Email — теперь вся карточка кликабельна */}
  <a href="mailto:polinakrechina@gmail.com" className="contact-card-link">
    <div className="contact-card">
      <div className="contact-icon">✉️</div>
      <h3>E-mail</h3>
      <p>For official inquiries</p>
      <span className="contact-link-text">polinakrechina@gmail.com</span>
    </div>
  </a>

  {/* Карточка: Instagram — теперь вся карточка кликабельна */}
  <a href="https://www.instagram.com/polinamunteanu94" target="_blank" rel="noreferrer" className="contact-card-link">
    <div className="contact-card">
      <div className="contact-icon">📸</div>
      <h3>Instagram</h3>
      <p>Founder's Profile</p>
      <span className="contact-link-text">@polinamunteanu94</span>
    </div>
  </a>
</div>
    </div>
  );
}

export default Contacts;