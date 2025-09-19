// components/ClientsSection.js
import React, { useRef } from 'react';
import client1 from '../../../assets/images/client-1.png';
import client2 from '../../../assets/images/client-2.png';
import client3 from '../../../assets/images/client-3.png';
import client4 from '../../../assets/images/client-4.png';
import client5 from '../../../assets/images/client-5.png';
import client6 from '../../../assets/images/client-6.png';

const ClientsSection = () => {
  const trackRef = useRef(null);
  
  const clients = [
    client1,
    client2, 
    client3,
    client4,
    client5,
    client6
  ];

  const scrollClients = (direction) => {
    if (!trackRef.current) return;
    
    const scrollAmount = 200;
    const currentTransform = trackRef.current.style.transform || 'translateX(0px)';
    const currentX = parseInt(currentTransform.match(/-?\d+/)?.[0] || '0');
    const newX = currentX + (direction * -scrollAmount);
    
    trackRef.current.style.transform = `translateX(${newX}px)`;
    
    // Reset animation
    trackRef.current.style.animation = 'none';
    setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.animation = 'scroll 30s linear infinite';
      }
    }, 100);
  };

  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2>Our Clients</h2>
        <div className="clients-slider">
          <div className="clients-track" ref={trackRef}>
            {clients.map((client, index) => (
              <div className="client-logo" key={`original-${index}`}>
                <img src={client} alt={`Client ${index + 1}`} />
              </div>
            ))}
            
            {/* Duplicate for infinite scroll effect */}
            {clients.map((client, index) => (
              <div className="client-logo" key={`duplicate-${index}`}>
                <img src={client} alt={`Client ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Navigation buttons at ends */}
          <button className="nav-btn prev-btn" onClick={() => scrollClients(-1)}>←</button>
          <button className="nav-btn next-btn" onClick={() => scrollClients(1)}>→</button>
        </div>
      </div>
      
      <style jsx>{`
        .clients-section {
          padding: 80px 20px;
          overflow: hidden;
        }
        
        .clients-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .clients-container h2 {
          font-size: 2.5rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 60px;
        }
        
        .clients-slider {
          position: relative;
          overflow: hidden;
          margin-bottom: 40px;
        }
        
        .clients-track {
          display: flex;
          animation: scroll 30s linear infinite;
          gap: 30px;
          align-items: center;
        }
        
        .client-logo {
          flex: 0 0 auto;
          width: 210px;
          height: 112px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .client-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        /* Navigation buttons at ends */
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border: none;
          background: #22c55e;
          color: white;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          z-index: 2;
        }
        
        .prev-btn { left: 0; }
        .next-btn { right: 0; }
        
        .nav-btn:hover {
          background: #16a34a;
          transform: translateY(-50%) scale(1.1);
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .clients-track:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .clients-container h2 {
            font-size: 2rem;
          }
          
          .client-logo {
            width: 168px;
            height: 84px;
          }
          
          .clients-track {
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;