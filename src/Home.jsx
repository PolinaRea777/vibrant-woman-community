import vwc from './VWC.jpg';

function Home() {
  return (
    <div className="home-container">
      
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Vibrant Women Community</h1>
          <p className="hero-intro">
            My name is <span>Polina Krechina-Munteanu</span>, and I am the founder of the large women's community "Vibrant Women Community".
          </p>
          <div className="hero-description">
            <p>Vibrant Women Community is a large and very vibrant women's community. I have always believed that true strength lies in unity. When I saw how many talented and ambitious women there were around me, I realized that I wanted to create a space where they could not only meet, but also inspire each other.</p>
            <p className="quote">"This 'spark' came when I myself was looking for support and understanding. Uniting women is my calling."</p>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={vwc} alt="Polina Krechina-Munteanu" className="hero-img"/>
        </div>
      </section>

     
      <section className="philosophy-section">
          <p className="quote" >I believe that when women come together with open hearts, competition takes a back seat. We create a space where everyone can be themselves, share their stories, and ask questions, which ultimately strengthens connections and opens up new opportunities.</p>
      </section>

      
    <section className="join-section">
  <div className="join-group">
    <h3>Join Women's Community</h3>
    <div className="social-buttons">
      <a href='https://chat.whatsapp.com/...' target="_blank" rel="noreferrer" className="button-link whatsapp">
        WhatsApp Group
      </a>
      <a href='https://t.me/...' target="_blank" rel="noreferrer" className="button-link telegram">
        Telegram Group
      </a>
    </div>
  </div>

  <div className="join-group mens-special">
    <h3>Miami Men’s Group</h3>
    <p className="mens-desc">Events, dinner parties & VIP reservations</p>
    <div className="social-buttons">
      <a href='https://chat.whatsapp.com/FkvUMdEq4pFGWEuEKdhHO8' target="_blank" rel="noreferrer" className="button-link whatsapp mens-btn">
        Join Men's WhatsApp
      </a>
    </div>
  </div>
</section>

     
      <section className="stats-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="stats-grid">
          <div className="stat-item"><h3>7+</h3><p>years in event organisation industry</p></div>
          <div className="stat-item"><h3>1000+</h3><p>happy ladies at our events</p></div>
          <div className="stat-item"><h3>200+</h3><p>found clients and friends</p></div>
          <div className="stat-item highlight"><h3>#1</h3><p>Largest community in Miami</p></div>
        </div>
        <div className="award-banner">
          <p className='award-banner-par'>🏆 Polina Krechina-Munteanu was awarded as <strong>“The Best Event Creator 2025”</strong></p>
        </div>
      </section>
    </div>
  );
}

export default Home;