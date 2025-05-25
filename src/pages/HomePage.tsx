import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import AffiliationsSection from '../components/sections/AffiliationsSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <IndustriesSection />
      <TestimonialsSection />
      <AffiliationsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;