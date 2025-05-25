import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import SecurityOfficers from './pages/services/SecurityOfficers';
import MobileSecurity from './pages/services/MobileSecurity';
import RiskConsulting from './pages/services/RiskConsulting';
import Technology from './pages/services/Technology';
import CashSolutions from './pages/services/CashSolutions';
import Aviation from './pages/industries/Aviation';
import Corporate from './pages/industries/Corporate';
import Healthcare from './pages/industries/Healthcare';
import Manufacturing from './pages/industries/Manufacturing';
import Retail from './pages/industries/Retail';
import Government from './pages/industries/Government';
import History from './pages/about/History';
import Leadership from './pages/about/Leadership';
import Sustainability from './pages/about/Sustainability';
import Careers from './pages/about/Careers';
import News from './pages/insights/News';
import Blog from './pages/insights/Blog';
import CaseStudies from './pages/insights/CaseStudies';
import WhitePapers from './pages/insights/WhitePapers';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;