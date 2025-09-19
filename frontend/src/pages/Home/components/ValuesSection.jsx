// components/ValuesSection.js
import React from 'react';
import iconBelong from '../../../assets/images/icon-belong.png';
import iconGrow from '../../../assets/images/icon-grow.png';
import iconInnovate from '../../../assets/images/icon-innovate.png';

const ValuesSection = () => {
  return (
    <section className="values-section">
      <div className="values-container">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <img src={iconBelong} alt="Belong icon" />
            </div>
            <h3>Belong</h3>
            <p>Be yourself and thrive together</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <img src={iconGrow} alt="Grow icon" />
            </div>
            <h3>Grow</h3>
            <p>Be intentional and humble</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <img src={iconInnovate} alt="Innovate icon" />
            </div>
            <h3>Innovate</h3>
            <p>Be curious and solve problems</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .values-section {
          padding: 100px 20px;
        }
        
        .values-container {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }
        
        .values-container h2 {
          font-size: 2.3rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 50px;
        }
        
        .values-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }
        
        .value-card {
          background: #fff;
          padding: 50px 30px 35px;
          border-radius: 12px;
          width: 300px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
        }
        
        .value-icon {
          width: 90px;
          height: 90px;
          margin: -70px auto 25px;
          background: #22c55e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .value-icon img {
          width: 45px;
          height: 45px;
          filter: brightness(0) invert(1);
        }
        
        .value-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #222;
        }
        
        .value-card p {
          font-size: 1rem;
          color: #344054;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .values-container h2 {
            font-size: 2rem;
            margin-bottom: 40px;
          }
          .values-grid {
            flex-direction: column;
            align-items: center;
            gap: 25px;
          }
          .value-card {
            width: 100%;
            max-width: 350px;
          }
        }
      `}</style>
    </section>
  );
};

export default ValuesSection;