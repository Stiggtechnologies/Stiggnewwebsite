import { SEO } from '@/components/seo/SEO';
import { SEO_CONFIG } from '@/seo-config';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Mail, Linkedin } from 'lucide-react';
import Button from '../../components/ui/Button';

const Leadership: React.FC = () => {
  const executives = [
    {
      name: "Michael Anderson",
      title: "Chief Executive Officer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "With over 20 years of experience in security and risk management, Michael leads Stigg Security's strategic vision and growth initiatives.",
      expertise: ["Strategic Planning", "Risk Management", "Industry Relations"],
    },
    {
      name: "Sarah Chen",
      title: "Chief Operations Officer",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
      bio: "Sarah brings 15 years of operational excellence, overseeing our service delivery and continuous improvement programs.",
      expertise: ["Operations Management", "Process Optimization", "Team Leadership"],
    },
    {
      name: "David Thompson",
      title: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      bio: "Leading our technology initiatives, David drives innovation in security solutions and digital transformation.",
      expertise: ["Security Technology", "Digital Innovation", "System Integration"],
    },
  ];

  const directors = [
    {
      name: "Emily Rodriguez",
      title: "Director of Training",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      expertise: ["Security Training", "Professional Development", "Compliance"],
    },
    {
      name: "James Wilson",
      title: "Director of Client Relations",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      expertise: ["Account Management", "Client Success", "Business Development"],
    },
    {
      name: "Lisa Patel",
      title: "Director of Risk Assessment",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
      expertise: ["Risk Analysis", "Security Consulting", "Threat Assessment"],
    },
  ];

  return (
    <>
      <SEO {...SEO_CONFIG[\'/about/leadership\']} />
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Leadership Team
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              Meet the experienced professionals leading Stigg Security's mission to deliver excellence in security services.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Executive Leadership
            </h2>
            <p className="text-lg text-steel-600">
              Our executive team brings decades of combined experience in security, technology, and business management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <motion.div
                key={executive.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft border border-steel-100 overflow-hidden"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-950 mb-1">
                    {executive.name}
                  </h3>
                  <p className="text-accent-500 font-medium mb-4">{executive.title}</p>
                  <p className="text-steel-600 mb-4">{executive.bio}</p>
                  <div className="space-y-2">
                    {executive.expertise.map((skill) => (
                      <div key={skill} className="flex items-center text-steel-600">
                        <Briefcase className="h-4 w-4 text-primary-600 mr-2" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <button className="text-steel-600 hover:text-primary-600 transition-colors">
                      <Mail className="h-5 w-5" />
                    </button>
                    <button className="text-steel-600 hover:text-primary-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Department Directors
            </h2>
            <p className="text-lg text-steel-600">
              Leading our specialized departments with expertise and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft border border-steel-100 overflow-hidden"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-950 mb-1">
                    {director.name}
                  </h3>
                  <p className="text-accent-500 font-medium mb-4">{director.title}</p>
                  <div className="space-y-2">
                    {director.expertise.map((skill) => (
                      <div key={skill} className="flex items-center text-steel-600">
                        <Award className="h-4 w-4 text-primary-600 mr-2" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary-900 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented professionals to join our leadership team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="accent" size="lg">
                View Opportunities
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Leadership;