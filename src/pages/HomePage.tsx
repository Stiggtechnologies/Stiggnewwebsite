import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import AffiliationsSection from '../components/sections/AffiliationsSection';
import ContactSection from '../components/sections/ContactSection';
import { SEO, LOCAL_BUSINESS_SCHEMA, HOMEPAGE_FAQ_SCHEMA } from '../components/seo/SEO';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Security Company Alberta | Stigg Security Inc."
        description="Alberta's trusted security company since 2010. Licensed security guards, mobile patrols, alarm monitoring & camera systems across Fort McMurray, Calgary & all of Alberta."
        canonical="/"
        jsonLd={[LOCAL_BUSINESS_SCHEMA, HOMEPAGE_FAQ_SCHEMA]}
      />
      <div className="min-h-screen bg-white">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <IndustriesSection />
        <TestimonialsSection />
        <AffiliationsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;