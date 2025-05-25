import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, User, Tag } from 'lucide-react';
import Button from '../../components/ui/Button';

const WhitePapers: React.FC = () => {
  const whitePapers = [
    {
      title: "The Future of Security Technology: 2024 and Beyond",
      author: "Dr. Michael Anderson",
      date: "March 2024",
      category: "Technology",
      description: "An in-depth analysis of emerging security technologies and their impact on the industry.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      title: "Best Practices in Corporate Security Management",
      author: "Sarah Chen",
      date: "February 2024",
      category: "Corporate Security",
      description: "Comprehensive guide to implementing effective security measures in corporate environments.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      title: "Risk Assessment Methodologies for Modern Threats",
      author: "David Thompson",
      date: "January 2024",
      category: "Risk Management",
      description: "Detailed examination of current risk assessment approaches and methodologies.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security White Papers
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              In-depth research and analysis on security trends, technologies, and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft border border-steel-100 overflow-hidden"
              >
                <div className="aspect-[16/9]">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-accent-500 text-sm font-medium">
                      {paper.category}
                    </span>
                    <div className="flex items-center text-steel-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {paper.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-primary-950 mb-3">
                    {paper.title}
                  </h2>
                  <p className="text-steel-600 mb-4">
                    {paper.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-steel-500 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      {paper.author}
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-950 mb-8">
              Research Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Security Technology Trends",
                "Risk Management",
                "Corporate Security",
                "Physical Security",
                "Cybersecurity Integration",
                "Emergency Response",
                "Security Training",
                "Compliance & Regulations",
              ].map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-soft border border-steel-100 flex items-center space-x-4"
                >
                  <FileText className="h-6 w-6 text-primary-600" />
                  <span className="font-medium text-primary-950">{topic}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-soft border border-steel-100 p-8">
              <h2 className="text-2xl font-bold text-primary-950 mb-6">
                Request Custom Research
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1">
                    Topic of Interest
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-steel-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your research topic"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1">
                    Industry
                  </label>
                  <select className="w-full px-4 py-2 rounded-lg border border-steel-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="">Select your industry</option>
                    <option value="corporate">Corporate</option>
                    <option value="industrial">Industrial</option>
                    <option value="retail">Retail</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="government">Government</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-steel-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Describe your research needs"
                  ></textarea>
                </div>
                <Button variant="primary" size="lg" fullWidth>
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;