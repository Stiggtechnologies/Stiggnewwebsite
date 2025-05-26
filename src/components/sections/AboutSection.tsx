import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Clock, Shield } from 'lucide-react';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  const features = [
    {
      title: "Licensed & Certified",
      description: "All security personnel are fully licensed under Alberta provincial regulations.",
      icon: <Award className="h-5 w-5 text-accent-500" />,
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock service with rapid response capabilities for emergencies.",
      icon: <Clock className="h-5 w-5 text-accent-500" />,
    },
    {
      title: "Insured Protection",
      description: "Comprehensive insurance coverage for complete peace of mind.",
      icon: <Shield className="h-5 w-5 text-accent-500" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-[4/5]">
                <img 
                  src="/images/team.jpg"
                  alt="Security professional in uniform" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent"></div>
              
              {/* Experience badge */}
              <motion.div 
                className="absolute top-6 right-6 bg-accent-500 text-white px-4 py-2 rounded-full font-medium text-sm"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
              >
                Since 2010
              </motion.div>
            </div>
            
            {/* Stats card */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-xl p-6 border border-steel-100"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-4xl font-bold text-primary-600">15+</p>
                  <p className="text-steel-500 text-sm mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-600">500+</p>
                  <p className="text-steel-500 text-sm mt-1">Clients Protected</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-6">About Stigg Security Inc.</h2>
            
            <p className="text-lg text-steel-700 mb-6 leading-relaxed">
              Founded in 2010, Stigg Security has grown to become one of Alberta's most trusted security providers. Based in Fort McMurray, we deliver comprehensive protection solutions for businesses, industrial sites, and residential properties across the province.
            </p>
            
            <p className="text-lg text-steel-700 mb-8 leading-relaxed">
              Our team consists of highly-trained security professionals who combine experience with cutting-edge technology to ensure the highest level of protection for our clients. We pride ourselves on our commitment to excellence, integrity, and customer satisfaction.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.4 }}
                >
                  <div className="mt-1 mr-3 flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-primary-900">{feature.title}</h3>
                    <p className="text-steel-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button variant="primary" size="lg">Learn More About Us</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;