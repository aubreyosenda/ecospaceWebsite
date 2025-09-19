import React, { useEffect } from 'react';

// Static imports
import hero1 from '../assets/images/hero-1.jpg';
import hero2 from '../assets/images/hero-2.jpg';
import hero3 from '../assets/images/hero-3.jpg';
import hero4 from '../assets/images/hero-4.jpg';
import hero5 from '../assets/images/hero-5.jpg';

const Carousel = () => {
  useEffect(() => {
    const carousel = document.getElementById('ecospaceCarousel');
    if (carousel && window.bootstrap) {
      new window.bootstrap.Carousel(carousel, {
        interval: 6000
      });
    }
  }, []);

  return (
    <>
      <div className="carousel-container">
        <div
          id="ecospaceCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="6000"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div
                className="carousel-slide-item"
                style={{ backgroundImage: `url(${hero1})` }}
              >
                <div className="container-fluid h-100 d-flex align-items-center justify-content-center text-center">
                  <div className="carousel-content-container">
                    <h1>Ecospace Services</h1>
                    <h1>Providing Geospatial Solutions</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div
                className="carousel-slide-item"
                style={{ backgroundImage: `url(${hero2})` }}
              >
                <div className="container-fluid h-100 d-flex align-items-center justify-content-center text-center">
                  <div className="carousel-content-container">
                    <h1>Ecospace Services</h1>
                    <h1>Providing Geospatial Solutions</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div
                className="carousel-slide-item"
                style={{ backgroundImage: `url(${hero3})` }}
              >
                <div className="container-fluid h-100 d-flex align-items-center justify-content-center text-center">
                  <div className="carousel-content-container">
                    <h1>Ecospace Services</h1>
                    <h1>Providing Geospatial Solutions</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="carousel-item">
              <div
                className="carousel-slide-item"
                style={{ backgroundImage: `url(${hero4})` }}
              >
                <div className="container-fluid h-100 d-flex align-items-center justify-content-center text-center">
                  <div className="carousel-content-container">
                    <h1>Ecospace Services</h1>
                    <h1>Providing Geospatial Solutions</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 5 */}
            <div className="carousel-item">
              <div
                className="carousel-slide-item"
                style={{ backgroundImage: `url(${hero5})` }}
              >
                <div className="container-fluid h-100 d-flex align-items-center justify-content-center text-center">
                  <div className="carousel-content-container">
                    <h1>Ecospace Services</h1>
                    <h1>Providing Geospatial Solutions</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators carousel-navigation-indicators">
            <button type="button" data-bs-target="#ecospaceCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#ecospaceCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#ecospaceCarousel" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#ecospaceCarousel" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#ecospaceCarousel" data-bs-slide-to="4"></button>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Carousel;