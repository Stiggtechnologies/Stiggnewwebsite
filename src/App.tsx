import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import AffiliationsSection from './components/sections/AffiliationsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <AffiliationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;