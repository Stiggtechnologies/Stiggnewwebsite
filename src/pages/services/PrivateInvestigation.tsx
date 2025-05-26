import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, FileText, Eye, Users, Lock } from 'lucide-react';
import Button from '../../components/ui/Button';

const PrivateInvestigation: React.FC = () => {
  const services = [
    {
      title: "Background Checks",
      description: "Comprehensive background investigation services",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Surveillance",
      description: "Professional surveillance and monitoring",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: "Corporate Investigations",
      description: "Internal investigations and fraud detection",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Documentation",
      description: "Detailed reporting and evidence collection",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Asset Location",
      description: "Asset search and recovery services",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Confidential Services",
      description: "Discreet and professional investigations",
      icon: <Lock className="h-6 w-6" />,
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Private Investigation Services
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              Professional and discreet investigation services for individuals and businesses.
            </p>
            <Button variant="accent" size="lg">
              Get Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Our Investigation Services
            </h2>
            <p className="text-lg text-steel-600">
              Comprehensive investigation solutions with proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-soft border border-steel-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-950 mb-2">
                  {service.title}
                </h3>
                <p className="text-steel-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-950 mb-6">
                Why Choose Our Investigators
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Licensed Professionals
                    </h3>
                    <p className="text-steel-600">
                      Experienced and licensed private investigators.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Confidentiality
                    </h3>
                    <p className="text-steel-600">
                      Strict confidentiality and professional discretion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Advanced Technology
                    </h3>
                    <p className="text-steel-600">
                      State-of-the-art investigation tools and techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg"
                alt="Private investigation services"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-primary-600">20+</p>
                <p className="text-steel-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary-900 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Professional Investigation?
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Contact us for a confidential consultation about your investigation needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="accent" size="lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateInvestigation;