import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ShieldCheck, Truck, Clock, Building2, BarChart as ChartBar } from 'lucide-react';
import Button from '../../components/ui/Button';

const CashSolutions: React.FC = () => {
  const services = [
    {
      title: "Cash Management",
      description: "Comprehensive cash handling solutions including counting, sorting, and secure storage.",
      icon: <Wallet className="h-6 w-6" />,
    },
    {
      title: "Secure Transport",
      description: "Armored vehicle services for safe transportation of cash and valuables.",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      title: "ATM Services",
      description: "Complete ATM management including maintenance, replenishment, and security.",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance and monitoring of cash operations.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Risk Management",
      description: "Advanced risk assessment and mitigation strategies for cash operations.",
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed reporting and analytics for cash flow management.",
      icon: <ChartBar className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Secure Cash Management Solutions
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              Professional cash handling and transportation services backed by
              state-of-the-art security technology and trained personnel.
            </p>
            <Button variant="accent" size="lg">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Comprehensive Cash Solutions
            </h2>
            <p className="text-lg text-steel-600">
              End-to-end cash management services designed to protect your assets
              and streamline operations.
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

      {/* CTA Section */}
      <section className="bg-primary-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Enhance Your Cash Management Security?
            </h2>
            <p className="text-xl text-steel-300 mb-8">
              Contact us today to discuss your cash handling needs and discover how
              our solutions can protect your assets.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="accent" size="lg">
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-950"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CashSolutions;