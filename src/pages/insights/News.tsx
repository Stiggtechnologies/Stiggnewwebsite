import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const News: React.FC = () => {
  const newsItems = [
    {
      title: "Stigg Security Expands Operations in Northern Alberta",
      date: "March 15, 2024",
      category: "Company News",
      excerpt: "Expanding our presence with new offices and enhanced security services in key industrial areas.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    },
    {
      title: "New Technology Partnership Announced",
      date: "March 10, 2024",
      category: "Technology",
      excerpt: "Strategic partnership to implement advanced AI-powered surveillance systems.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      title: "Industry Recognition for Excellence",
      date: "March 5, 2024",
      category: "Awards",
      excerpt: "Stigg Security receives top industry awards for outstanding service quality.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
  ];

  const pressReleases = [
    {
      title: "Q4 2023 Growth Report",
      date: "January 15, 2024",
      link: "#",
    },
    {
      title: "New Executive Appointments",
      date: "December 20, 2023",
      link: "#",
    },
    {
      title: "Community Initiative Launch",
      date: "December 10, 2023",
      link: "#",
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
              Latest News & Updates
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              Stay informed about Stigg Security's latest developments, achievements, and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft border border-steel-100 overflow-hidden"
              >
                <div className="aspect-[16/9]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-accent-500 text-sm font-medium">
                      {item.category}
                    </span>
                    <div className="flex items-center text-steel-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-primary-950 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-steel-600 mb-4">
                    {item.excerpt}
                  </p>
                  <Button variant="ghost" className="text-primary-600 hover:text-primary-700 p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-1 inline" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-950 mb-8">
              Press Releases
            </h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-soft border border-steel-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-950">
                        {release.title}
                      </h3>
                      <div className="flex items-center text-steel-500 mt-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {release.date}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download PDF
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary-900 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news and industry insights.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-steel-700 bg-steel-800 text-white placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <Button variant="accent">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;