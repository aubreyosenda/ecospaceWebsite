import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="ecospace-footer">
      <div className="footer-content">
        <div className="footer-row">
          {/* Company Info */}
          <div className="company-info">
            <div className="company-header">
              <img 
                src="../../assets/e-logo.png" 
                alt="Ecospace Logo" 
                className="footer-logo" 
                style={{borderRadius: '50%', padding: '8px', boxShadow: '0 0 0 2px #fff'}} 
              />
              <span className="company-name">Ecospace Services Ltd</span>
            </div>
            <p>4th Floor, Wing A, Suite 401<br />
            Greyville Hub, Eastern Bypass Road,<br />
            Ruai, Nairobi, Kenya.</p>
            <p>
              <a href="mailto:services@espace.co.ke">services@espace.co.ke</a><br />
              <a href="tel:+254798740614">+254 798 740 614</a>
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <img src="../../assets/x-.svg" alt="Twitter/X" style={{width:'24px', height:'24px'}} />
              </a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Services Section */}
          <div className="services-grid">
            <div className="services-column">
              <h4>Consultancy - Services</h4>
              <ul>
                <li>Surveying & Mapping</li>
                <li>Training</li>
                <li>Utility Management</li>
                <li>Agriculture</li>
                <li>Transport</li>
                <li>Physical Planning</li>
              </ul>
            </div>
            <div className="services-column">
              <h4>Consultancy - Utilities</h4>
              <ul>
                <li>Gas</li>
                <li>Water</li>
                <li>Electricity</li>
                <li>Telecommunication</li>
              </ul>
            </div>
            <div className="services-column">
              <h4>Geospatial Portal</h4>
              <ul>
                <li>Ecofield</li>
                <li>Cadastral SDI</li>
                <li>LIMS</li>
                <li>Ecohub SDI</li>
                <li>Land Astra</li>
                <li>Maji Safe</li>
                <li>Sukari Smart</li>
                <li>Data Processor</li>
                <li>SurveyLink</li>
                <li>Sky Log</li>
                <li>Eco Connect</li>
                <li>Prosync UTM</li>
              </ul>
            </div>
            <div className="services-column">
              <h4>Products</h4>
              <ul>
                <li>Total Stations</li>
                <li>GNSS Systems</li>
                <li>Levels</li>
                <li>UAS</li>
                <li>Data Collectors</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div className="services-column">
              <h4>Support</h4>
              <ul>
                <li>Repair Service</li>
                <li>Resource/Webinars</li>
                <li>Blog</li>
              </ul>
              <h4>Other</h4>
              <ul>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          © 2025 Ecospace Services Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;