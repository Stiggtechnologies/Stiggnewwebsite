import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Projects: React.FC = () => {
  const featuredProjects = [
    {
      title: "Corporate HQ Security Upgrade",
      client: "Major Financial Institution",
      location: "Calgary, AB",
      services: ["Access Control", "Video Surveillance", "24/7 Guard Service"],
      description: "Complete security infrastructure modernization for a 40-story corporate headquarters.",
      image: "https://images.pexels.com/photos/1837591/pexels-photo-1837591.jpeg",
      results: "50% reduction in security incidents",
    },
    {
      title: "Industrial Complex Protection",
      client: "Manufacturing Company",
      location: "Fort McMurray, AB",
      services: ["Perimeter Security", "Mobile Patrols", "Emergency Response"],
      description: "Comprehensive security solution for a 200-acre industrial facility.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
      results: "Zero unauthorized access incidents",
    },
    {
      title: "Healthcare Facility Security",
      client: "Regional Medical Center",
      location: "Edmonton, AB",
      services: ["Access Control", "Patient Safety", "Asset Protection"],
      description: "Integrated security system for a major healthcare facility.",
      image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
      results: "100% compliance with safety regulations",
    },
  ];

  const statistics = [
    {
      value: "500+",
      label: "Projects Completed",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      value: "99.9%",
      label: "Client Satisfaction",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      value: "24/7",
      label: "Support & Monitoring",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      value: "1000+",
      label: "Security Personnel",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Security Projects
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              Delivering comprehensive security solutions across industries
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-primary-950 mb-2">{stat.value}</p>
                <p className="text-steel-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-steel-600">
              Explore our recent security implementations and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft border border-steel-100 overflow-hidden"
              >
                <div className="aspect-[16/9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-steel-500 text-sm mb-3">
                    <Building2 className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-950 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-steel-600 mb-4">{project.description}</p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-steel-500">Client:</span>
                      <span className="ml-2 text-primary-950">{project.client}</span>
                    </div>
                    <div>
                      <span className="text-steel-500">Services:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="bg-primary-50 text-primary-600 text-sm px-2 py-1 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-steel-500">Results:</span>
                      <p className="mt-1 text-accent-500 font-medium">{project.results}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" fullWidth>
                    View Case Study <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-950 mb-6">
                Industries We Serve
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Corporate & Commercial
                    </h3>
                    <p className="text-steel-600">
                      Comprehensive security solutions for office buildings and commercial spaces.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Industrial & Manufacturing
                    </h3>
                    <p className="text-steel-600">
                      Advanced security systems for industrial facilities and manufacturing plants.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Healthcare & Education
                    </h3>
                    <p className="text-steel-600">
                      Specialized security solutions for healthcare facilities and educational institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                alt="Industrial security implementation"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-primary-600">15+</p>
                <p className="text-steel-600">Years Experience</p>
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
              Ready to Start Your Security Project?
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your security needs and discover how our solutions can protect your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="accent" size="lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950" size="lg">
                View More Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;