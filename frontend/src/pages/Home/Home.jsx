// pages/Home.js
import React from 'react';
import HeaderCarousel from '../../components/HeaderCarousel';

import HeroSection from './components/HeroSection';
import CardsSection from './components/CardsSection';
import CareerSection from './components/CareerSection';
import ValuesSection from './components/ValuesSection';
import ClientsSection from './components/ClientsSection';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <HeaderCarousel />
      <HeroSection />
      <CardsSection />
      <CareerSection />
      <ValuesSection />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Home;