import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Header.css";
import EcospaceLogo from "../assets/images/ecospace-logo.png";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Initialize Bootstrap dropdowns
    const bootstrap = require("bootstrap");
    const dropdownElementList = [].slice.call(
      document.querySelectorAll(".dropdown-toggle")
    );
    dropdownElementList.map(
      (dropdownToggleEl) => new bootstrap.Dropdown(dropdownToggleEl)
    );

    // Sticky header functionality
    const handleScroll = () => {
      const header = document.querySelector('.header-container');
      if (header) {
        const headerTop = header.offsetTop;
        if (window.pageYOffset > headerTop) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Close all dropdowns function
    const closeAllDropdowns = () => {
      const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
      dropdownToggles.forEach(toggle => {
        const dropdown = bootstrap.Dropdown.getInstance(toggle);
        if (dropdown) {
          dropdown.hide();
        }
      });
    };

    // Add hover functionality for larger devices
    const handleHoverEvents = () => {
      const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
      
      dropdownToggles.forEach(toggle => {
        // Show on hover and close others
        toggle.addEventListener('mouseenter', () => {
          if (window.innerWidth >= 992) { // lg breakpoint
            // Close all other dropdowns first
            closeAllDropdowns();
            
            // Small delay to ensure other dropdowns are closed
            setTimeout(() => {
              const dropdown = new bootstrap.Dropdown(toggle);
              dropdown.show();
            }, 50);
          }
        });
        
        // Hide when leaving dropdown area
        const dropdownMenu = toggle.nextElementSibling;
        if (dropdownMenu) {
          const hideDropdown = () => {
            if (window.innerWidth >= 992) {
              const dropdown = bootstrap.Dropdown.getInstance(toggle);
              if (dropdown) {
                dropdown.hide();
              }
            }
          };

          // Hide when mouse leaves the dropdown menu
          dropdownMenu.addEventListener('mouseleave', hideDropdown);
          
          // Also hide when mouse leaves the toggle button (if not entering the menu)
          toggle.addEventListener('mouseleave', (e) => {
            // Check if mouse is not moving to the dropdown menu
            setTimeout(() => {
              if (!dropdownMenu.matches(':hover') && !toggle.matches(':hover')) {
                hideDropdown();
              }
            }, 100);
          });
        }
      });

      // Close dropdowns when hovering over non-dropdown areas
      const navbar = document.querySelector('.navbar-nav');
      if (navbar) {
        navbar.addEventListener('mouseleave', () => {
          if (window.innerWidth >= 992) {
            closeAllDropdowns();
          }
        });
      }
    };

    handleHoverEvents();

    // Re-attach events on window resize
    window.addEventListener('resize', handleHoverEvents);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleHoverEvents);
    };
  }, []);

  return (
    <div className={`header-container ${isSticky ? 'header-sticky' : ''}`}>
      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg header-main-navigation">
        <div className="container-fluid">
          <a className="navbar-brand header-brand-logo" href="/">
            <img
              src={EcospaceLogo}
              alt="Ecospace Services - Providing Geospatial Solutions"
              className="img-fluid"
            />
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#headerNavbarNav"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className="collapse navbar-collapse header-navbar-collapse"
            id="headerNavbarNav"
          >
            {/* Close button for mobile */}
            <div className="d-lg-none mobile-close-button">
              <button
                className="btn-close-menu"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#headerNavbarNav"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <ul className="navbar-nav justify-content-center w-100">
              {/* Consultancy Mega Dropdown */}
              <li className="nav-item dropdown header-mega-dropdown">
                <a
                  className="nav-link dropdown-toggle header-nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Consultancy
                </a>
                <div className="dropdown-menu header-mega-menu">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <h6>Services</h6>
                        <ul className="header-list-unstyled">
                          <li>
                            <a href="#">Surveying & Mapping</a>
                          </li>
                          <li>
                            <a href="#">Training</a>
                          </li>
                          <li>
                            <a href="#">Utility Management</a>
                          </li>
                          <li>
                            <a href="#">Agriculture</a>
                          </li>
                          <li>
                            <a href="#">Transport</a>
                          </li>
                          <li>
                            <a href="#">Physical Planning</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <h6>Utilities</h6>
                        <ul className="header-list-unstyled">
                          <li>
                            <a href="#">Gas</a>
                          </li>
                          <li>
                            <a href="#">Water</a>
                          </li>
                          <li>
                            <a href="#">Electricity</a>
                          </li>
                          <li>
                            <a href="#">Telecommunication</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Geospatial Portal */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle header-nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Geospatial Portal
                </a>
                <ul className="dropdown-menu header-dropdown-menu">
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Ecofield
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Cadastral SDI
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      LIMS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Ecohub SDI
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Land Astra
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Maji Safe
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Sukari Smart
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Data Processor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      SurveyLink
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Sky Log
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Eco Connect
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Prosync UTM
                    </a>
                  </li>
                </ul>
              </li>

              {/* Products */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle header-nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Products
                </a>
                <ul className="dropdown-menu header-dropdown-menu">
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Total Stations
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      GNSS Systems
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Levels
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      UAS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Data collectors
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Accessories
                    </a>
                  </li>
                </ul>
              </li>

              {/* Support */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle header-nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Support
                </a>
                <ul className="dropdown-menu header-dropdown-menu">
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Repair Service
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Resource/Webinars
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link header-nav-link" href="#">
                  Careers
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link header-nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Bottom Blue Bar */}
      <div className="header-top-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-3 col-12 text-start header-copyright">
              <span>Ecospace Services Ltd © 2025</span>
            </div>
            <div className="col-md-9 col-12 text-center header-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Staff Email</a>
              <a href="#">DB Login</a>
              <a href="#">Training Centre</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;