import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, ShoppingBag, Landmark, Hospital, Shield } from 'lucide-react';
import Button from '../../components/ui/Button';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Corporate Office Security Transformation",
      client: "Major Financial Institution",
      industry: "Corporate",
      challenge: "Modernizing security infrastructure while maintaining operations",
      solution: "Implemented integrated access control and surveillance system",
      results: "50% reduction in security incidents",
      icon: <Building2 className="h-6 w-6" />,
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    },
    {
      title: "Industrial Site Protection",
      client: "Manufacturing Company",
      industry: "Industrial",
      challenge: "Securing large industrial complex with multiple access points",
      solution: "Deployed comprehensive security system with mobile patrols",
      results: "Zero unauthorized access incidents",
      icon: <Factory className="h-6 w-6" />,
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    },
    {
      title: "Retail Chain Security Enhancement",
      client: "National Retail Chain",
      industry: "Retail",
      challenge: "Reducing theft and improving customer safety",
      solution: "Advanced surveillance and loss prevention system",
      results: "30% reduction in shrinkage",
      icon: <ShoppingBag className="h-6 w-6" />,
      image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg",
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
              Client Success Stories
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              Real-world examples of how we've helped organizations enhance their security and protect their assets.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft border border-steel-100 overflow-hidden"
              >
                <div className="aspect-[16/9]">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                    {study.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-primary-950 mb-4">
                    {study.title}
                  </h2>
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-steel-500">Client:</span>
                      <span className="ml-2 text-primary-950">{study.client}</span>
                    </div>
                    <div>
                      <span className="text-steel-500">Industry:</span>
                      <span className="ml-2 text-primary-950">{study.industry}</span>
                    </div>
                    <div>
                      <span className="text-steel-500">Challenge:</span>
                      <p className="mt-1 text-steel-600">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-steel-500">Solution:</span>
                      <p className="mt-1 text-steel-600">{study.solution}</p>
                    </div>
                    <div>
                      <span className="text-steel-500">Results:</span>
                      <p className="mt-1 text-accent-500 font-medium">{study.results}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" fullWidth>
                    Read Full Case Study
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-steel-600">
              Explore our success stories across different sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <Building2 className="h-6 w-6" />, label: "Corporate" },
              { icon: <Factory className="h-6 w-6" />, label: "Industrial" },
              { icon: <ShoppingBag className="h-6 w-6" />, label: "Retail" },
              { icon: <Landmark className="h-6 w-6" />, label: "Government" },
              { icon: <Hospital className="h-6 w-6" />, label: "Healthcare" },
              { icon: <Shield className="h-6 w-6" />, label: "Financial" },
            ].map((industry, index) => (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-soft border border-steel-100 text-center"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-3">
                  {industry.icon}
                </div>
                <span className="font-medium text-primary-950">{industry.label}</span>
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
              Ready to Transform Your Security?
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Let us help you develop a comprehensive security solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="accent" size="lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950" size="lg">
                View More Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;