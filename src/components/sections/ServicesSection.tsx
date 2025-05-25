import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Bell, Camera, Lock, Users, Search } from 'lucide-react';
import Button from '../ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-steel-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary-950 mb-3">{title}</h3>
      <p className="text-steel-600 mb-4">{description}</p>
      <a href="#contact" className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700 transition-colors">
        Learn more 
        <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Security Guard Services",
      description: "Licensed, professional security personnel providing on-site protection for businesses, events, and properties.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Alarm Monitoring",
      description: "24/7 monitoring with rapid response protocols to ensure immediate action when alarms are triggered.",
      icon: <Bell className="h-6 w-6" />,
    },
    {
      title: "Camera Systems",
      description: "Advanced surveillance technology with AI capabilities for facial recognition and unusual activity detection.",
      icon: <Camera className="h-6 w-6" />,
    },
    {
      title: "Access Control",
      description: "Secure entry systems with multi-factor authentication for enhanced facility protection.",
      icon: <Lock className="h-6 w-6" />,
    },
    {
      title: "Event Security",
      description: "Specialized security teams for public events, concerts, corporate functions, and VIP protection.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive security audits to identify vulnerabilities and develop tailored protection strategies.",
      icon: <Search className="h-6 w-6" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-steel-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">Our Security Solutions</h2>
          <p className="text-lg text-steel-600">
            Comprehensive protection services tailored to your specific needs, combining advanced technology with human expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="primary" size="lg">View All Services</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;