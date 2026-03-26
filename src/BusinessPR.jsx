import React from 'react';
import './BusinessPR.css';

function BusinessPR() {
  return (
    <div className="pr-container">
      <header className="pr-header">
        <h1 className="playfair">PR Promotion for Your Business</h1>
        <p className="pr-subtitle">Unique advertising packages to attract the attention your business deserves! 🌟</p>
      </header>

      {/* SECTION 1: PR WEEK */}
     <section className="pr-premium">
  <div className="premium-grid">
<div className="premium-card">
            <h2 className="playfair">Option 1 <br />"Business PR Day"</h2>
            <div className="price-tag">
              <span>$90</span>
              <small>Across 3 Platforms</small>
            </div>
            
            <div className="premium-content-vertical">
              <div className="platform-box">
                <h3>📱 WhatsApp & Telegram</h3>
                <ul>
                  <li><strong>Admin post</strong> pinned for 24h</li>
                  <li>Vibrant Women WhatsApp (1,000+)</li>
                  <li>Vibrant Women Telegram (700+)</li>
                </ul>
              </div>
              <div className="platform-box">
                <h3>📸 Instagram</h3>
                <ul>
                  <li><strong>3 Instagram Stories</strong></li>
                  <li>1 "Talking-head" by Polina</li>
                  <li>2 Stories with your materials</li>
                </ul>
              </div>
              <p className="fee-note">* Service fee higher if filming on location is required.</p>
            </div>
          </div>

    
    {/* КАРТОЧКА 2: Без Reel ($230) */}
    <div className="premium-card">
      <h2 className="playfair">Option 2 <br/>"PR Week"</h2>
      <div className="price-tag">
        <span>$230</span>
        <small>without Reel</small>
      </div>
      
      <div className="premium-content-vertical">
        <div className="platform-box">
          <h3>📱 WhatsApp & Telegram</h3>
          <ul>
            <li><strong>3 posts per week</strong></li>
            <li><strong>Pinned for 24 hours</strong></li>
            <li><strong>BONUS:</strong> +1 Month unlimited posts</li>
          </ul>
        </div>
        <div className="platform-box">
          <h3>📸 Instagram</h3>
          <ul>
            <li><strong>3-4 Instagram Stories</strong></li>
            <li>Account tagging included</li>
          </ul>
        </div>
      </div>
    </div>

    {/* КАРТОЧКА 2: С Reel ($280) - ВЫДЕЛЕННАЯ */}
    <div className="premium-card highlighted">
      <div className="premium-badge">Most Popular</div>
      <h2 className="playfair">Option 3 <br/> "PR Week + Reel"</h2>
      <div className="price-tag">
        <span>$280</span>
        <small>with Reel</small>
      </div>
      
      <div className="premium-content-vertical">
        <div className="platform-box">
          <h3>📱 WhatsApp & Telegram</h3>
          <ul>
            <li><strong>3 posts per week</strong></li>
            <li><strong>Pinned for 24 hours</strong></li>
            <li><strong>BONUS:</strong> +1 Month unlimited posts</li>
          </ul>
        </div>
        <div className="platform-box highlighted-box">
          <h3>📸 Instagram (Premium)</h3>
          <ul>
            <li><strong>Promotional Reel</strong> included</li>
            <li><strong>3-4 Instagram Stories</strong></li>
            <li><a href="https://www.instagram.com/polinamunteanu94" target="_blank" rel="noreferrer" className="insta-link">View Profile →</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* SECTION 2: COMMUNITY ADS */}
      <h2 className="section-title playfair">Community Advertising Options</h2>
      <div className="ads-grid">
        {/* WhatsApp Group */}
        <div className="ad-card wa">
          <div className="ad-icon">WhatsApp</div>
          <h3>1000+ Members</h3>
          <div className="ad-price-list">
            <div className="price-item"><span>2 posts / week</span> <strong>$50/mo</strong></div>
            <div className="price-item"><span>Unlimited (Daily)</span> <strong>$80/mo</strong></div>
            <div className="price-item"><span>One-time post</span> <strong>$15</strong></div>
          </div>
          <p className="ad-note">🗓️ Valid for 1 month from purchase. 1 post per day max.</p>
        </div>

        {/* Telegram Group */}
        <div className="ad-card tg">
          <div className="ad-icon">Telegram</div>
          <h3>700+ Members</h3>
          <div className="ad-price-list">
            <div className="price-item"><span>2 posts / week</span> <strong>$30/mo</strong></div>
            <div className="price-item"><span>Unlimited (Daily)</span> <strong>$50/mo</strong></div>
            <div className="price-item"><span>One-time post</span> <strong>$10</strong></div>
          </div>
          <p className="ad-note">🗓️ Valid for 1 month from purchase. 1 post per day max.</p>
        </div>
      </div>

      <footer className="pr-footer">
        <p>Ready to boost your business?</p>
        <a href="https://wa.me/17866205862" className="contact-btn">Message Polina for PR</a>
      </footer>
    </div>
  );
}

export default BusinessPR;