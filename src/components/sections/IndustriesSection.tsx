import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, Warehouse, Building, ShoppingBag, Landmark, Hotel, School } from 'lucide-react';
import Button from '../ui/Button';

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-soft border border-steel-100 hover:shadow-soft-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative z-10">
        <div className="mb-4 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-100 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary-950 mb-2">{title}</h3>
        <p className="text-steel-600 mb-4">{description}</p>
        <Button variant="ghost" className="text-primary-600 hover:text-primary-700 p-0">
          Learn More →
        </Button>
      </div>
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary-50 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </motion.div>
  );
};

const IndustriesSection: React.FC = () => {
  const industries = [
    {
      title: "Corporate Offices",
      description: "Comprehensive security solutions for corporate environments, including access control and surveillance.",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: "Industrial & Manufacturing",
      description: "Specialized protection for industrial facilities, equipment, and personnel.",
      icon: <Factory className="h-6 w-6" />,
    },
    {
      title: "Warehousing & Logistics",
      description: "Secure storage and distribution facilities with 24/7 monitoring and guard services.",
      icon: <Warehouse className="h-6 w-6" />,
    },
    {
      title: "Government Facilities",
      description: "High-security solutions for government buildings and sensitive installations.",
      icon: <Building className="h-6 w-6" />,
    },
    {
      title: "Retail & Commercial",
      description: "Loss prevention and customer safety services for retail establishments.",
      icon: <ShoppingBag className="h-6 w-6" />,
    },
    {
      title: "Financial Institutions",
      description: "Advanced security measures for banks, credit unions, and financial services.",
      icon: <Landmark className="h-6 w-6" />,
    },
    {
      title: "Hospitality",
      description: "Guest safety and asset protection for hotels, resorts, and entertainment venues.",
      icon: <Hotel className="h-6 w-6" />,
    },
    {
      title: "Educational Facilities",
      description: "Creating safe learning environments with tailored security programs.",
      icon: <School className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-20 bg-steel-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">Industries We Serve</h2>
          <p className="text-lg text-steel-600">
            Tailored security solutions for diverse industries, ensuring protection that meets your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;