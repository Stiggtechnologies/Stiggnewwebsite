import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Clock, Award, Bell, Eye } from 'lucide-react';
import Button from '../../components/ui/Button';

const SecurityGuards: React.FC = () => {
  const services = [
    {
      title: "On-Site Security",
      description: "24/7 professional security presence for your premises",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Patrol Services",
      description: "Regular security patrols and property checks",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Emergency Response",
      description: "Rapid response to security incidents and emergencies",
      icon: <Bell className="h-6 w-6" />,
    },
    {
      title: "Access Control",
      description: "Visitor management and access point monitoring",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: "Special Events",
      description: "Dedicated security teams for events and functions",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock security coverage",
      icon: <Clock className="h-6 w-6" />,
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Security Guards
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              Trained and certified security personnel providing comprehensive protection for your property and assets.
            </p>
            <Button variant="accent" size="lg">
              Request a Guard
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Our Guard Services
            </h2>
            <p className="text-lg text-steel-600">
              Comprehensive security solutions tailored to your specific needs.
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
                Why Choose Our Guards
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Licensed & Certified
                    </h3>
                    <p className="text-steel-600">
                      All guards are fully licensed and certified with regular training updates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Professional Experience
                    </h3>
                    <p className="text-steel-600">
                      Extensive experience in various security scenarios and environments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Rapid Response
                    </h3>
                    <p className="text-steel-600">
                      Quick response times and efficient handling of security incidents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg"
                alt="Security guard on duty"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-primary-600">1000+</p>
                <p className="text-steel-600">Guards deployed</p>
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
              Need Security Guards?
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your security needs and get a customized protection plan.
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

export default SecurityGuards;