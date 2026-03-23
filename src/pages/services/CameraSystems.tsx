import { SEO } from '@/components/seo/SEO';
import { SEO_CONFIG } from '@/seo-config';
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Shield, Eye, Wifi, Server, Settings } from 'lucide-react';
import Button from '../../components/ui/Button';

const CameraSystems: React.FC = () => {
  const services = [
    {
      title: "HD Surveillance",
      description: "High-definition cameras for crystal clear monitoring",
      icon: <Camera className="h-6 w-6" />,
    },
    {
      title: "AI Analytics",
      description: "Advanced AI-powered video analytics",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: "Remote Access",
      description: "Secure remote viewing and control",
      icon: <Wifi className="h-6 w-6" />,
    },
    {
      title: "Cloud Storage",
      description: "Secure cloud recording and storage",
      icon: <Server className="h-6 w-6" />,
    },
    {
      title: "System Integration",
      description: "Seamless integration with existing security",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      title: "24/7 Monitoring",
      description: "Professional monitoring services",
      icon: <Shield className="h-6 w-6" />,
    }
  ];

  return (
    <>
      <SEO {...SEO_CONFIG[\'/services/camera-systems\']} />
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Camera Systems
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              State-of-the-art surveillance solutions for comprehensive security coverage.
            </p>
            <Button variant="accent" size="lg">
              Get Protected
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Our Camera Solutions
            </h2>
            <p className="text-lg text-steel-600">
              Advanced surveillance technology for complete security coverage.
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
                Why Choose Our Systems
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      HD Quality
                    </h3>
                    <p className="text-steel-600">
                      Crystal clear footage with high-definition cameras.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Smart Analytics
                    </h3>
                    <p className="text-steel-600">
                      AI-powered detection and analysis capabilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Easy Access
                    </h3>
                    <p className="text-steel-600">
                      Secure remote viewing from any device.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg"
                alt="Advanced surveillance system"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-primary-600">4K</p>
                <p className="text-steel-600">Ultra HD Quality</p>
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
              Ready to Upgrade Your Security?
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Get started with our advanced camera systems today.
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
    </>
  );
};

export default CameraSystems;