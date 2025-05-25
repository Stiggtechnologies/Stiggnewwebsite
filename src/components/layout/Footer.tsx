import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo className="h-8" />
            </div>
            <p className="text-steel-400 mb-4">
              Alberta's trusted partner in security solutions since 2010. Licensed and insured to protect what matters most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-steel-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-steel-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-steel-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-steel-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-steel-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-steel-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-steel-400 hover:text-white transition-colors">News</a></li>
              <li><a href="#contact" className="text-steel-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-steel-400 hover:text-white transition-colors">Security Guards</a></li>
              <li><a href="#services" className="text-steel-400 hover:text-white transition-colors">Alarm Monitoring</a></li>
              <li><a href="#services" className="text-steel-400 hover:text-white transition-colors">Camera Systems</a></li>
              <li><a href="#services" className="text-steel-400 hover:text-white transition-colors">Risk Assessment</a></li>
              <li><a href="#services" className="text-steel-400 hover:text-white transition-colors">Private Investigation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-500 mr-2" />
                <div className="text-steel-400">
                  <p>Stigg Security@Fort McMurray</p>
                  <p>200 Parent Way, Fort McMurray, AB T9H 5E6</p>
                  <p>Stigg Security@Calgary</p>
                  <p>121 8 Ave SE, High River, Alberta T1V 1R8, Canada</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent-500 mr-2" />
                <div className="text-steel-400">
                  <p>Fort McMurray: (780) 215-2887</p>
                  <p>Calgary: (587) 210-2167</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent-500 mr-2" />
                <a href="mailto:admin@stigg.ca" className="text-steel-400 hover:text-white transition-colors">admin@stigg.ca</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-steel-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-steel-400 text-sm">
              &copy; {year} Stigg Security Inc. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-steel-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-steel-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-steel-400 hover:text-white text-sm transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;