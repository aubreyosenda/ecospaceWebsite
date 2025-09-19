import React from 'react';
import Carousel from './Carousel';
import Header from './Header';
import './Carousel.css';
import './Header.css';

const HeaderCarousel = () => {
  return (
    <div>
      {/* Carousel Component */}
      <Carousel />
      
      {/* Header Component */}
      <Header />
    </div>
  );
};

export default HeaderCarousel;