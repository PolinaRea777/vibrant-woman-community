import React, { useState } from 'react';
import './events.css';
import events from './events.jpg';
import event1 from './PromoDinners/event1.jpg';
import event2 from './PromoDinners/event2.jpg';
import event3 from './PromoDinners/events3.jpg';
import event4 from './PromoDinners/event4.jpg';
import event5 from './PromoDinners/event5.jpg';
import event6 from './PromoDinners/event6.jpg';
import event7 from './PromoDinners/event7.jpg';
import event8 from './PromoDinners/event8.PNG';
import event10 from './PromoDinners/compressVideo.mp4';
import event11 from './PromoDinners/event11.jpg';
import event12 from './PromoDinners/eventsNew.PNG';
import event13 from './PromoDinners/event13.jpg';
import event14 from './PromoDinners/event14.jpg';
import event15 from './PromoDinners/event15.jpg';
import event16 from './PromoDinners/event16.JPG';
import event17 from './PromoDinners/event17.jpg';
import event18 from './PromoDinners/event18.JPG';
import event19 from './PromoDinners/event19.JPG';
import event20 from './PromoDinners/event20.jpg';
import event21 from './PromoDinners/event21.JPG';
import event22 from './PromoDinners/event22.jpg';
import event23 from './PromoDinners/event23.JPG';
import event24 from './PromoDinners/event24.jpg';
import event25 from './PromoDinners/event25.jpg';



function Events () {
    const [selectedImg, setSelectedImg] = useState(null);

   
    const galleryItems = [
        { id: 1, src: event3 },
        { id: 2, src: event1 },
        { id: 3, src: event2 },
        { id: 4, src: event4 },
        { id: 5, src: event5 },
        { id: 6, src: event6 },
        { id: 7, src: event7 },
        { id: 8, src: event8 },
        { id: 11, src: event11 },
        { id: 12, src: event12 },
        { id: 13, src: event13 },
        { id: 14, src: event14 },
        { id: 15, src: event15 },
        { id: 16, src: event16 },
        { id: 17, src: event17 },
        { id: 18, src: event18 },
        { id: 19, src: event19 },
        { id: 20, src: event20 },
        { id: 21, src: event21 },
        { id: 22, src: event22 },
        { id: 23, src: event23 },
        { id: 24, src: event24 },
        { id: 25, src: event25 }
    ];

    return (
        <div className="events-container">
            <header className="events-hero">
                <h1 className="playfair">Our Vibrant Events</h1>
                <p className="subtitle">Celebrating 7+ years of uniting ambitious women in Miami</p>
            </header>
            
            <section className="events-description">
                <div className="description-block">
                    <div className="text-side">
                        <h2 className="playfair">Women's Dinner Parties</h2>
                        <p>At our dinners, we enjoy life to the fullest. It’s a space where you can let go, dance, and sing.</p>
                        <ul className="event-features">
                            <li><span>🎵</span> <strong>Music:</strong> Miami's best DJs (House/Deep House)</li>
                            <li><span>🎤</span> <strong>Karaoke:</strong> Sing your heart out in select venues</li>
                            <li><span>🥂</span> <strong>Bonuses:</strong> Complimentary dinner and drinks</li>
                        </ul>
                    </div>
                    <div className="image-side side-1">
                        <img src={events} width={600} alt="Events Main"/>
                    </div>
                </div>
            </section>

            <section>
                <div className="description-block reverse">
                    <div className="image-side side-2">
                        <img src={event1} width={600} alt="Networking Event"/>
                    </div>
                    <div className="text-side">
                        <h2 className="playfair">Networking Events</h2>
                        <p>Build connections that matter. Whether you have a business or just hobbies, this is your stage.</p>
                        <ul className="event-features">
                            <li><span>📢</span> <strong>Presentations:</strong> Pitch your business to the community</li>
                            <li><span>🤝</span> <strong>Connections:</strong> Find friends, clients, and partners</li>
                            <li><span>✨</span> <strong>Atmosphere:</strong> Exceptional vibes with Miami's top DJs</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="booking-info">
                <div className="booking-card">
                    <h2 className="playfair">Join Our Next Dinner</h2>
                    <p>To reserve your spot, a <strong>$20 deposit via Zelle</strong> is required (goes directly to waiter tips).</p>
                    <a href="https://wa.me/17866205862" className="book-btn">Contact Polina via WhatsApp</a>
                </div>
            </section>

      

                <section className="workshop-portfolio">
    <h2 className="playfair section-title">Gallery</h2>
    <div className="workshop-grid">
        
        {/* Вертикальное видео  */}
        <div className="workshop-item">
            <video 
                src={event10} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="gallery-media-fit" 
            />
        </div>
        
        {galleryItems.map((item) => (
            <div 
                key={item.id} 
                className="workshop-item" 
                onClick={() => setSelectedImg(item.src)} 
            >
                <img src={item.src} alt="Event" className="gallery-media-fit" />
            </div>
        ))}
    </div>


                {/* МОДАЛЬНОЕ ОКНО (Lightbox) */}
                {selectedImg && (
                    <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
                        <span className="close-modal">&times;</span>
                        <img src={selectedImg} alt="Full size" className="modal-content" />
                    </div>
                )}
            </section>
        </div>
    );
}

export default Events;