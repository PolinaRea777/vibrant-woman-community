import React from 'react';
import './ModelWorkshop.css';
import work from './ModelWorkshop/work.jpeg';
import work1 from './ModelWorkshop/work.JPG';
import work2 from './ModelWorkshop/work2.jpeg';
import work3 from './ModelWorkshop/work3.jpeg';
import work4 from './ModelWorkshop/work4.jpeg';
import work5 from './ModelWorkshop/work5.jpeg';
import work6 from './ModelWorkshop/work6.jpeg';
import work7 from './ModelWorkshop/work7.jpeg';
import work8 from './ModelWorkshop/work8.jpeg';
import work9 from './ModelWorkshop/work9.jpg';
import work10 from './ModelWorkshop/work10.JPG';
import work11 from './ModelWorkshop/work11.JPG';
import work12 from './ModelWorkshop/work12.JPG';
import work13 from './ModelWorkshop/work13.JPG';
import work14 from './ModelWorkshop/work14.JPG';
import work15 from './ModelWorkshop/work15.JPG';
import work16 from './ModelWorkshop/work16.JPG';
import work17 from './ModelWorkshop/work17.JPG';
import work18 from './ModelWorkshop/work18.JPG';

function ModelWorkshop() {
  return (
    <div className="workshop-page-wrapper"> 
    <div className="workshop-container">
  <div>
  <header className="workshop-header-top">
    <h1 className="playfair main-title">"Model Workshop" Photo Project</h1>
    <p className="workshop-main-description">
      A beautiful, glamorous, all-inclusive photoshoot with stunning decorations and a professional approach to each participant - created by professional model Polina Krechina-Munteanu.
    </p>
    <div className="time-banner">
      <p>🕒 <strong>Project Duration:</strong> 6 hours (from 12 pm to 6 pm)</p>
      <p className="italic-text">You come to the studio – our team does everything else!</p>
    </div>
  </header>

  {/* MAIN CONTENT: Photo Left | Features Right */}
  <div className="workshop-main-split">
    <div className="workshop-image-side">
      <img src={work12} alt="Workshop Process" className="side-photo" width={300} height={400}/>
    </div>

    <section className="workshop-features-side">
      <h2 className="playfair side-title">On the day of the project you receive:</h2>
      <div className="features-list">
        <div className="feature-item"><span>👠</span> Runway walking & posing lessons</div>
        <div className="feature-item"><span>💄</span> Professional makeup & hairstyle</div>
        <div className="feature-item"><span>📸</span> Modeling guidance from top photographers</div>
        <div className="feature-item"><span>💃🏼</span> Designer luxury dresses</div>
        <div className="feature-item"><span>🥂</span> Huge Sushi Ship, snacks & champagne</div>
        <div className="feature-item"><span>🎁</span> Mini-competition with prizes</div>
      </div>
    </section>
  </div>

    

      {/* PRICING PACKAGES */}
      <section className="pricing-section">
        <h2 className="playfair section-title">Participation Packages</h2>
        <div className="pricing-grid">
          
          {/* STANDARD */}
          <div className="price-card standard">
            <h3>Standard Package</h3>
            <div className="price">$355</div>
            <ul className="price-list">
              <li>30 min photoshoot (2 of your looks)</li>
              <li><strong>5 retouched photos</strong> + all unedited</li>
              <li>Makeup by top artists</li>
              <li>Posing & Model walk lessons</li>
              <li>Buffet, sushi & champagne</li>
            </ul>
          </div>

          {/* VIP */}
          <div className="price-card vip">
            <div className="vip-badge">Best Value & Luxury</div>
            <h3>VIP Package</h3>
            <div className="price">$555</div>
            <p className="vip-intro">Everything from Standard, plus:</p>
            <ul className="price-list">
              <li><strong>50 min photoshoot</strong> (3 designer looks)</li>
              <li><strong>20 retouched photos</strong> total</li>
              <li><strong>Professional video & Reels</strong></li>
              <li><strong>Professional hairstyle</strong></li>
              <li><strong>Designer outfits for the photoshoot</strong></li>
              <li><strong>$100 Gift Card</strong> for Flawless Skin salon</li>
              <li><strong>$50 Gift Card</strong> for Body Sculpting</li>
            </ul>
          </div>

        </div>
      </section>

      {/* AFTER THE PROJECT */}
      <section className="results-section">
        <h2 className="playfair">Why this is an investment in yourself:</h2>
        <div className="results-content">
          <ul>
            <li>✨ <strong>Modeling Portfolio:</strong> Professional shots that work for you for years.</li>
            <li>✨ <strong>Scouting Opportunity:</strong> Get included in Polina's modeling scout list.</li>
            <li>✨ <strong>Confidence Boost:</strong> Leave the runway with "I can do anything" energy!</li>
          </ul>
          <a href="https://wa.me/17866205862" className="button-link whatsapp">Book Your Spot</a>
        </div>
      </section>

      <section className="workshop-portfolio">
        <h2 className="playfair section-title">Project Atmosphere</h2>
        <div className="workshop-grid">
          <div className="workshop-item tall">
            <img src={work1} alt="Model Work 1" />
          </div>
          <div className="workshop-item">
            <img src={work2} alt="Model Work 2" />
          </div>
          <div className="workshop-item">
            <img src={work3} alt="Model Work 3" />
          </div>
          <div className="workshop-item wide">
            <img src={work4} alt="Model Work 4" />
          </div>
           <div className="workshop-item">
            <img src={work5} alt="Model Work 5" />
          </div>
           <div className="workshop-item">
            <img src={work6} alt="Model Work 6" />
          </div>
           <div className="workshop-item">
            <img src={work7} alt="Model Work 3" />
          </div>
           <div className="workshop-item">
            <img src={work8} alt="Model Work 3" />
          </div>
           <div className="workshop-item">
            <img src={work9} alt="Model Work 3" />
          </div>
           <div className="workshop-item">
            <img src={work10} alt="Model Work 3" />
          </div>
           <div className="workshop-item">
            <img src={work11} alt="Model Work 3" />
          </div>
           <div className="workshop-item">
            <img src={work12} alt="Model Work 3" />
          </div>
           <div className="workshop-item">
            <img src={work13} alt="Model Work 3" />
          </div>
           <div className="workshop-item">
            <img src={work14} alt="Model Work 3" />
          </div>
           <div className="workshop-item">
            <img src={work15} alt="Model Work 3" />
          </div>
           <div className="workshop-item">
            <img src={work16} alt="Model Work 3" />
          </div>
           <div className="workshop-item">
            <img src={work17} alt="Model Work 3" />
          </div>
           <div className="workshop-item">
            <img src={work18} alt="Model Work 3" />
          </div>
           
        </div>
      </section>
    </div>
    </div>
    </div>
  );
}

export default ModelWorkshop;