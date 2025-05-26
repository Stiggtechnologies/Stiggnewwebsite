import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import SecurityOfficers from './pages/services/SecurityOfficers.tsx';
import MobileSecurity from './pages/services/MobileSecurity.tsx';
import RiskConsulting from './pages/services/RiskConsulting.tsx';
import Technology from './pages/services/Technology.tsx';
import CashSolutions from './pages/services/CashSolutions.tsx';
import Aviation from './pages/industries/Aviation.tsx';
import Corporate from './pages/industries/Corporate.tsx';
import Healthcare from './pages/industries/Healthcare.tsx';
import Manufacturing from './pages/industries/Manufacturing.tsx';
import Retail from './pages/industries/Retail.tsx';
import Government from './pages/industries/Government.tsx';
import History from './pages/about/History.tsx';
import Leadership from './pages/about/Leadership.tsx';
import Sustainability from './pages/about/Sustainability.tsx';
import Careers from './pages/about/Careers.tsx';
import News from './pages/insights/News.tsx';
import Blog from './pages/insights/Blog.tsx';
import CaseStudies from './pages/insights/CaseStudies.tsx';
import WhitePapers from './pages/insights/WhitePapers.tsx';
import Contact from './pages/Contact.tsx';
import Projects from './pages/Projects.tsx';
import AgentWidget from './components/AgentWidget.tsx';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/security-guards" element={<SecurityGuards />} />
          <Route path="/services/alarm-monitoring" element={<AlarmMonitoring />} />
          <Route path="/services/camera-systems" element={<CameraSystems />} />
          <Route path="/services/risk-assessment" element={<RiskAssessment />} />
          <Route path="/services/private-investigation" element={<PrivateInvestigation />} />
          <Route path="/services/security-officers" element={<SecurityOfficers />} />
          <Route path="/services/mobile-security" element={<MobileSecurity />} />
          <Route path="/services/risk-consulting" element={<RiskConsulting />} />
          <Route path="/services/technology" element={<Technology />} />
          <Route path="/services/cash-solutions" element={<CashSolutions />} />
          <Route path="/industries/aviation" element={<Aviation />} />
          <Route path="/industries/corporate" element={<Corporate />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/government" element={<Government />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/sustainability" element={<Sustainability />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/insights/news" element={<News />} />
          <Route path="/insights/blog" element={<Blog />} />
          <Route path="/insights/case-studies" element={<CaseStudies />} />
          <Route path="/insights/white-papers" element={<WhitePapers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
      <AgentWidget />
    </Router>
  );
}

export default App;