import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, FileText, ChartBar, AlertTriangle, CheckCircle } from 'lucide-react';
import Button from '../../components/ui/Button';

const RiskAssessment: React.FC = () => {
  const services = [
    {
      title: "Security Audits",
      description: "Comprehensive evaluation of security measures",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Threat Analysis",
      description: "Detailed assessment of potential security risks",
      icon: <AlertTriangle className="h-6 w-6" />,
    },
    {
      title: "Compliance Review",
      description: "Evaluation of regulatory compliance",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "Documentation",
      description: "Detailed reporting and recommendations",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Risk Mitigation",
      description: "Strategic planning for risk reduction",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Performance Metrics",
      description: "Security effectiveness measurement",
      icon: <ChartBar className="h-6 w-6" />,
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Risk Assessment
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              Comprehensive security risk evaluation and mitigation strategies.
            </p>
            <Button variant="accent" size="lg">
              Get Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Our Assessment Services
            </h2>
            <p className="text-lg text-steel-600">
              Thorough evaluation of security risks and vulnerabilities.
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
                Why Choose Our Assessment
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Expert Analysis
                    </h3>
                    <p className="text-steel-600">
                      Experienced security professionals conducting thorough assessments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Comprehensive Reports
                    </h3>
                    <p className="text-steel-600">
                      Detailed documentation and actionable recommendations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Strategic Solutions
                    </h3>
                    <p className="text-steel-600">
                      Tailored risk mitigation strategies for your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
                alt="Security risk assessment"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-primary-600">100%</p>
                <p className="text-steel-600">Thorough Analysis</p>
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
              Ready for a Security Assessment?
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Contact us to schedule your comprehensive risk assessment.
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

export default RiskAssessment;