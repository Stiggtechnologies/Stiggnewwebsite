import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggeredFadeIn = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.5
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary-950 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-950 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            {/* Hero content */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-950/20 text-accent-400 mb-4">
                <Shield className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Licensed & Insured Security</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
                Your Trusted Partner in <span className="text-accent-500">Protection</span>
              </h1>
              
              <p className="text-xl text-steel-300 mb-8 leading-relaxed">
                Providing professional security solutions across Alberta with licensed guards, 
                AI-enhanced surveillance, and 24/7 monitoring services.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                <Button size="lg" variant="accent">
                  Get a Free Quote
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950" size="lg">
                  Our Services
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "24/7 Emergency Response", 
                  "Licensed Security Guards", 
                  "Remote Monitoring", 
                  "State-of-the-art Technology"
                ].map((feature, i) => (
                  <motion.div 
                    key={feature}
                    custom={i}
                    initial="hidden"
                    animate={controls}
                    variants={staggeredFadeIn}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0" />
                    <span className="text-steel-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
              <div className="aspect-[4/3] relative">
                <img
                  src={new URL('/images/guard-3.jpg', import.meta.url).href}
                  alt="Professional security guard in uniform" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/60 via-transparent to-transparent"></div>
              
              {/* Stats card */}
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                  <span className="text-sm font-medium text-primary-950">Client Protection Rate</span>
                </div>
                <div className="mt-1">
                  <p className="text-2xl font-bold text-primary-950">99.8%</p>
                  <p className="text-xs text-steel-500">Incident prevention success</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;