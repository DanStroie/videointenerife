import React from 'react';
import Hero from '../components/home/Hero';
import DemoReel from '../components/home/DemoReel';
import ServicesOverview from '../components/home/ServicesOverview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <>
      <Hero />
      <DemoReel />
      <ServicesOverview />
      <PortfolioPreview />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;
