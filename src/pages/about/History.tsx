import { SEO } from '@/components/seo/SEO';
import { SEO_CONFIG } from '@/seo-config';
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, Users, Globe } from 'lucide-react';
import Button from '../../components/ui/Button';

const History: React.FC = () => {
  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Established in Fort McMurray with a vision to revolutionize security services in Alberta.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      year: "2015",
      title: "Regional Expansion",
      description: "Expanded operations across Alberta, serving major industrial and commercial clients.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      year: "2018",
      title: "Industry Recognition",
      description: "Received multiple awards for excellence in security services and innovation.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      year: "2020",
      title: "Team Growth",
      description: "Reached 500+ security professionals and expanded service offerings.",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  return (
    <>
      <SEO {...SEO_CONFIG[\'/about/history\']} />
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Journey
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              From humble beginnings to industry leadership: The story of Stigg Security's commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex items-center md:w-32 lg:w-40">
                      <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                        {milestone.icon}
                      </div>
                      <div className="hidden md:block flex-1 h-0.5 bg-primary-100"></div>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-soft border border-steel-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-primary-950 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-steel-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-steel-600">
              The principles that have guided us since day one and continue to shape our future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-soft border border-steel-100"
            >
              <h3 className="text-xl font-semibold text-primary-950 mb-4">Excellence</h3>
              <p className="text-steel-600">
                We strive for excellence in every aspect of our service, from training our personnel to implementing cutting-edge security solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-soft border border-steel-100"
            >
              <h3 className="text-xl font-semibold text-primary-950 mb-4">Integrity</h3>
              <p className="text-steel-600">
                We maintain the highest standards of integrity in all our operations, building trust through transparency and ethical conduct.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-soft border border-steel-100"
            >
              <h3 className="text-xl font-semibold text-primary-950 mb-4">Innovation</h3>
              <p className="text-steel-600">
                We continuously innovate and adapt to evolving security challenges, leveraging the latest technologies and best practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary-900 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Be Part of Our Future
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Join us in shaping the future of security services in Alberta.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="accent" size="lg">
                Join Our Team
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

export default History;