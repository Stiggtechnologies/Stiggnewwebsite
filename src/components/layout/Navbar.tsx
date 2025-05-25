import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '/projects' },
  {
    name: 'Services',
    href: '#services',
    children: [
      { name: 'Security Officers', href: '/services/security-officers' },
      { name: 'Mobile Security', href: '/services/mobile-security' },
      { name: 'Risk Consulting', href: '/services/risk-consulting' },
      { name: 'Technology Solutions', href: '/services/technology' },
      { name: 'Cash Solutions', href: '/services/cash-solutions' },
    ]
  },
  {
    name: 'Industries',
    href: '#industries',
    children: [
      { name: 'Aviation', href: '/industries/aviation' },
      { name: 'Corporate', href: '/industries/corporate' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Retail', href: '/industries/retail' },
      { name: 'Government', href: '/industries/government' },
    ]
  },
  {
    name: 'About',
    href: '#about',
    children: [
      { name: 'Our History', href: '/about/history' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'Sustainability', href: '/about/sustainability' },
      { name: 'Careers', href: '/about/careers' },
    ]
  },
  {
    name: 'Insights',
    href: '/insights',
    children: [
      { name: 'News', href: '/insights/news' },
      { name: 'Blog', href: '/insights/blog' },
      { name: 'Case Studies', href: '/insights/case-studies' },
      { name: 'White Papers', href: '/insights/white-papers' },
    ]
  },
  { name: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary-950 shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3 text-xl font-bold text-white">
              <Logo className="h-8" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button 
                    className="flex items-center text-white/90 hover:text-white transition-colors"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <a 
                    href={item.href} 
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                )}

                {item.children && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.children.map((child) => (
                      <a 
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+17802152887">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950" size="sm">
                (780) 215-2887
              </Button>
            </a>
            <a href="#contact">
              <Button variant="accent" size="sm">Get a Quote</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button 
                        className="flex items-center text-white hover:text-accent-400 transition-colors"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        {item.name}
                        <ChevronDown 
                          className={`ml-1 h-4 w-4 transition-transform ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {openDropdown === item.name && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <a 
                              key={child.name}
                              href={child.href}
                              className="block text-white/80 hover:text-white"
                            >
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={item.href} 
                      className="text-white hover:text-accent-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-3">
                <a href="tel:+17802152887" className="block w-full">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950" fullWidth>
                    (780) 215-2887
                  </Button>
                </a>
                <a href="#contact" className="block w-full">
                  <Button variant="accent" fullWidth>Get a Quote</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;