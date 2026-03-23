import { SEO } from '@/components/seo/SEO';
import { SEO_CONFIG } from '@/seo-config';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const Blog: React.FC = () => {
  const featuredPosts = [
    {
      title: "The Future of Security Technology in 2024",
      author: "Michael Anderson",
      date: "March 15, 2024",
      category: "Technology",
      excerpt: "Exploring emerging trends in security technology and their impact on the industry.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      title: "Best Practices for Corporate Security",
      author: "Sarah Chen",
      date: "March 10, 2024",
      category: "Corporate Security",
      excerpt: "Essential guidelines for maintaining robust security in corporate environments.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      title: "Sustainable Security Solutions",
      author: "David Thompson",
      date: "March 5, 2024",
      category: "Sustainability",
      excerpt: "How security companies can implement eco-friendly practices without compromising effectiveness.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    },
  ];

  const categories = [
    "Technology",
    "Corporate Security",
    "Risk Management",
    "Industry Trends",
    "Best Practices",
    "Sustainability",
  ];

  return (
    <>
      <SEO {...SEO_CONFIG[\'/insights/blog\']} />
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Insights Blog
            </h1>
            <p className="text-xl text-steel-300 mb-8">
              Expert perspectives on security trends, best practices, and industry developments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft border border-steel-100 overflow-hidden"
              >
                <div className="aspect-[16/9]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-accent-500 text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-steel-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-primary-950 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-steel-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-steel-500 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <Button variant="ghost" className="text-primary-600 hover:text-primary-700 p-0">
                      Read More <ArrowRight className="h-4 w-4 ml-1 inline" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-950 mb-8">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-soft border border-steel-100 flex items-center space-x-3"
                >
                  <Tag className="h-5 w-5 text-primary-600" />
                  <span className="font-medium text-primary-950">{category}</span>
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
              Subscribe to Our Blog
            </h2>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Get the latest security insights delivered directly to your inbox.
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
    </>
  );
};

export default Blog;