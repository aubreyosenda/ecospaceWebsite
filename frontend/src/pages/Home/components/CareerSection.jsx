// components/CareerSection.js
import React from 'react';
import surveyorWork from '../../../assets/images/surveyor-work.jpg';
import contourMap from '../../../assets/images/Contour-Map.svg';

const CareerSection = () => {
  return (
    <section className="career-section">
      <div className="career-content">
        <div className="career-image">
          <img src={surveyorWork} alt="Professional surveyor at work" />
        </div>
        <div className="career-text">
          <span className="career-tag">Career</span>
          <h2>We nurture your ideas to reality</h2>
          <p>With the help, guidance and support from fellow team members collectively we nurture your ideas.</p>
          <button className="career-button">
            <span>Explore careers</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .career-section {
          background: url(${contourMap}) center/cover no-repeat, 
                      linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          color: white;
          padding: 80px 20px;
          margin: 40px 50px;
          border-radius: 30px;
          overflow: hidden;
          position: relative;
        }

        .career-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .career-tag {
          background: rgba(255,255,255,0.2);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .career-text h2 {
          font-size: 2.5rem;
          font-weight: bold;
          margin: 20px 0;
          line-height: 1.2;
        }
        
        .career-text p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          opacity: 0.9;
        }
        
        .career-button {
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
        
        .career-button:hover {
          background: #16a34a;
          transform: translateY(-2px);
        }
        
        .career-image img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .career-section {
            background: url(${contourMap}) center/cover no-repeat, 
                        linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            padding: 80px 20px;
            margin: 40px 4px;
            border-radius: 30px;
            overflow: hidden;
            position: relative;
          }
          .career-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .career-text h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CareerSection;