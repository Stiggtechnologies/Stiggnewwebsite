import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart, Globe, Shield, Sun } from 'lucide-react';
import Button from '../../components/ui/Button';

const Sustainability: React.FC = () => {
  const initiatives = [
    {
      title: "Environmental Impact",
      description: "Reducing our carbon footprint through eco-friendly practices and sustainable operations.",
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      title: "Community Support",
      description: "Engaging with and giving back to local communities through various programs.",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: "Sustainable Operations",
      description: "Implementing green technologies and practices in our security services.",
      icon: <Recycle className="h-6 w-6" />,
    },
    {
      title: "Global Responsibility",
      description: "Contributing to global sustainability goals and environmental protection.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Ethical Practices",
      description: "Maintaining high standards of ethical conduct in all operations.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Clean Energy",
      description: "Transitioning to renewable energy sources across our facilities.",
      icon: <Sun className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Commitment to Sustainability
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              Leading the security industry in environmental responsibility and sustainable practices.
            </p>
            <Button variant="accent" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Sustainability Initiatives
            </h2>
            <p className="text-lg text-steel-600">
              Our comprehensive approach to environmental and social responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-soft border border-steel-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {initiative.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-950 mb-2">
                  {initiative.title}
                </h3>
                <p className="text-steel-600">
                  {initiative.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-950 mb-6">
                Our Environmental Impact
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Carbon Footprint Reduction
                    </h3>
                    <p className="text-steel-600">
                      30% reduction in carbon emissions through efficient operations and green technology.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Renewable Energy
                    </h3>
                    <p className="text-steel-600">
                      50% of our energy consumption now comes from renewable sources.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Waste Reduction
                    </h3>
                    <p className="text-steel-600">
                      Implemented comprehensive recycling programs across all facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
                alt="Sustainable practices in action"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-primary-600">30%</p>
                <p className="text-steel-600">Carbon reduction</p>
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
              Join Our Sustainability Journey
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Partner with us to make a positive impact on the environment while ensuring top-tier security.
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

export default Sustainability;