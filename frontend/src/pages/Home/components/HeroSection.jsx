// components/HeroSection.js
import React from 'react';
import droneSetup from '../../../assets/images/drone-setup.jpg'; // Adjust the path as needed

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ 
      background: `url(${droneSetup}) center center / cover no-repeat` 
    }}>
      <div className="hero-content">
        <div className="hero-text">
          <h1>The Complete Solution</h1>
          <p>Ecoscape's perspective on providing solutions considers a collaborative approach with the client. The deliverables ensures that the clients current and future needs are addressed.</p>
          <button className="cta-button">
            <span>Scalable futuristic solution</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .hero-section {
          color: white;
          padding: 100px 20px;
          min-height: 1000px;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .hero-text h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .hero-text p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          opacity: 0.9;
        }
        
        .cta-button {
          background: #22c55e;
          color: white;
          border: none;
          padding: 15px 25px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          background: #16a34a;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .hero-text h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;