import React from 'react';
import './AboutCreator.css';
import { useState } from 'react';
import creatorPhoto from './Polina.JPG'; 
import article1 from './article1.PNG';
import article2 from './article2.PNG';


function AboutCreator() {

    const [isJadoreOpen, setIsJadoreOpen] = useState(false);

  return (
    <div className="creator-page-wrapper">
      <section className="creator-hero">
        <div className="creator-info">
          <h1 className="creator-name">POLINA KRECHINA-MUNTEANU</h1>
          <p className="creator-tagline">
            Miami-based promoter, PR expert, model, and founder of the powerful women-led community 
            <span> “Vibrant Women of Miami”</span>.
          </p>
          <div className="creator-intro-highlight">
  <span className="quote-mark">“</span>
  <p>
    Polina has transformed her personal journey into a platform that empowers others. 
    In an era where influence is measured not only by numbers but by impact, 
    <strong> Polina Krechina</strong> stands out as a woman who builds real connections and meaningful communities.
  </p>
</div>
        </div>
        <div className="creator-image-container">
            <div className="creator-image-wrapper">
                <img src={creatorPhoto} alt="Polina Krechina-Munteanu" className="creator-main-img" />
    
    {/* ПОДПИСЬ НА ФОТО */}
    <div className="photo-signature">
      <span className="signature-name">Polina Krechina-Munteanu</span>
      <span className="signature-title">Founder</span>
    </div>
  </div>
</div>
      </section>

      <section className="creator-details">
        <div className="detail-block">
          <h2>THE CREATOR OF WOMEN’S COMMUNITY</h2>
          <p>Polina spent the last seven years working in restaurant PR, organizing women's networking and party dinners, and creating environments where meaningful connections could happen naturally. Polina saw how powerful the right introduction or conversation can be, especially for women who are building their lives and careers in a new country.</p>
          <p>Women’s Community "Vibrant Women of Miami," created by Polina, is a space where women support each other, share contacts, opportunities, and encouragement. Polina knows firsthand how difficult the journey can be - especially when you're building a life from scratch. This community is proof that when women unite, incredible things happen.</p>
        </div>

        <div className="detail-block">
          <h2>THE CREATOR OF PHOTO PROJECT “MODEL WORKSHOP”</h2>
          <p>"Model Workshop" was created to educate women in runway walking, posing, and camera confidence. The training is applied directly during the photo project, allowing participants to walk away with professional photos and videos. Polina’s goal as a practicing model was to give women practical skills and high-quality content that could truly open doors for them.</p>
        </div>
      </section>

      
     {/* НОВАЯ МИНИМАЛИСТИЧНАЯ СЕКЦИЯ ПРЕССЫ (ТАЙМЛАЙН) */}
      <section className="press-section-clean">
        <h2 className="playfair press-title-clean">Featured In Press</h2>
        <p className="press-subtitle-clean">Discover the stories and interviews in leading publications</p>

        <div className="press-list-container">
          
          {/* ПУНКТ 1: Wall Street Times  */}
          <div className="press-item">
            <div className="press-dot"></div> 
            <div className="press-content">
              <span className="publication-name">Wall Street Times</span>
              <h3 className="article-title">Story of Empowering<br />Miami Women</h3>
              <p className="article-desc">An in-depth story about Polina Krechina's journey and her mission to empower women in Miami.</p>
              <a href="https://wallstreettimes.com/polina-krechinas-story-of-empowering-miami-women/" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="press-action-link">
                Read Online →
              </a>
            </div>
          </div>

          <div className="press-divider-line"></div> 

          {/* ПУНКТ 2: Jadore Magazine  */}
          <div className="press-item">
            <div className="press-dot"></div> 
            <div className="press-content">
              <span className="publication-name">Jadore Fashion</span>
              <h3 className="article-title">Building Communities,<br />Creating Opportunities</h3>
              <p className="article-desc">Special feature for Jadore, New Year Edition (December 2025). Building communities, creating opportunities, inspiring women.</p>
              <button className="press-action-link" onClick={() => setIsJadoreOpen(true)}>
                View Article (2 Pages) 👁️
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* МОДАЛЬНОЕ ОКНО ДЛЯ СТАТЬИ JADORE  */}
      {isJadoreOpen && (
        <div className="jadore-modal-overlay" onClick={() => setIsJadoreOpen(false)}>
          <span className="close-jadore">&times;</span>
          <div className="jadore-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="jadore-pages-container">
              <img src={article1} alt="Jadore Article Page 1" className="jadore-page-img" />
              <img src={article2} alt="Jadore Article Page 2" className="jadore-page-img" />
            </div>
          </div>
        </div>
      )}
    </div>
  
  );
}

export default AboutCreator;