import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Camera, Lock, Wifi, Server, Bell } from 'lucide-react';
import Button from '../../components/ui/Button';

const Technology: React.FC = () => {
  const solutions = [
    {
      title: "Video Surveillance",
      description: "Advanced CCTV systems with AI-powered analytics for real-time monitoring and threat detection.",
      icon: <Camera className="h-6 w-6" />,
    },
    {
      title: "Access Control",
      description: "State-of-the-art access management systems with biometric authentication and visitor tracking.",
      icon: <Lock className="h-6 w-6" />,
    },
    {
      title: "Network Security",
      description: "Robust cybersecurity solutions protecting your physical security infrastructure.",
      icon: <Wifi className="h-6 w-6" />,
    },
    {
      title: "Integrated Systems",
      description: "Centralized security management platforms combining multiple security technologies.",
      icon: <Server className="h-6 w-6" />,
    },
    {
      title: "Alarm Systems",
      description: "Advanced intrusion detection with immediate notification and response protocols.",
      icon: <Bell className="h-6 w-6" />,
    },
    {
      title: "Remote Monitoring",
      description: "24/7 professional monitoring services with rapid response capabilities.",
      icon: <Shield className="h-6 w-6" />,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Technology Solutions
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              Cutting-edge security technology integrated with human expertise for comprehensive protection.
            </p>
            <Button variant="accent" size="lg">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Our Technology Solutions
            </h2>
            <p className="text-lg text-steel-600">
              Advanced security technologies customized for your specific needs and integrated seamlessly into your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-soft border border-steel-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-950 mb-3">
                  {solution.title}
                </h3>
                <p className="text-steel-600">
                  {solution.description}
                </p>
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
                Why Choose Our Technology
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Enterprise-Grade Security
                    </h3>
                    <p className="text-steel-600">
                      Military-grade encryption and security protocols protecting your data and systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Seamless Integration
                    </h3>
                    <p className="text-steel-600">
                      Our solutions work together seamlessly and integrate with your existing systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      24/7 Technical Support
                    </h3>
                    <p className="text-steel-600">
                      Round-the-clock technical assistance and monitoring for your security systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3205737/pexels-photo-3205737.jpeg"
                alt="Security technology control room"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-primary-600">99.9%</p>
                <p className="text-steel-600">System uptime</p>
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
              Ready to Upgrade Your Security Technology?
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our security technology experts to discover the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="accent" size="lg">
                Schedule Demo
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

export default Technology;