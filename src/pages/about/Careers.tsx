import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Users, Clock, Shield, BookOpen } from 'lucide-react';
import Button from '../../components/ui/Button';

const Careers: React.FC = () => {
  const benefits = [
    {
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with regular reviews.",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: "Professional Development",
      description: "Continuous training and certification opportunities.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Team Culture",
      description: "Supportive work environment focused on collaboration.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Work-Life Balance",
      description: "Flexible scheduling and paid time off.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Career Growth",
      description: "Clear advancement paths and leadership opportunities.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Education Support",
      description: "Tuition assistance for relevant certifications.",
      icon: <BookOpen className="h-6 w-6" />,
    },
  ];

  const openings = [
    {
      title: "Security Officer",
      location: "Fort McMurray, AB",
      type: "Full-time",
      description: "Join our team of professional security officers providing top-tier protection services.",
    },
    {
      title: "Security Supervisor",
      location: "Edmonton, AB",
      type: "Full-time",
      description: "Lead and manage a team of security professionals in delivering excellent service.",
    },
    {
      title: "Technology Specialist",
      location: "Calgary, AB",
      type: "Full-time",
      description: "Support and maintain advanced security systems and technology solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              Build a rewarding career in security with Alberta's leading security services provider.
            </p>
            <Button variant="accent" size="lg">
              View Openings
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-steel-600">
              Join a team that values professional growth, innovation, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-soft border border-steel-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-950 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-steel-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-steel-600">
              Explore our available positions and find your next career opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft border border-steel-100 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-950 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-steel-600">{job.location}</span>
                    <span className="text-accent-500">{job.type}</span>
                  </div>
                  <p className="text-steel-600 mb-6">
                    {job.description}
                  </p>
                  <Button variant="outline" size="sm">
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-950 mb-6">
                Application Process
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Online Application
                    </h3>
                    <p className="text-steel-600">
                      Submit your application through our online portal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Initial Interview
                    </h3>
                    <p className="text-steel-600">
                      Meet with our hiring team to discuss your experience and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Background Check
                    </h3>
                    <p className="text-steel-600">
                      Complete required security clearances and background checks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Team collaboration"
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-primary-600">500+</p>
                <p className="text-steel-600">Team members</p>
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
              Ready to Start Your Career?
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Join our team of security professionals and make a difference in protecting what matters most.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="accent" size="lg">
                Apply Now
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

export default Careers;