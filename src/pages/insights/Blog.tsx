import { SEO } from '@/components/seo/SEO';
import { SEO_CONFIG } from '@/seo-config';
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Shield } from 'lucide-react';

const posts = [
  {
    slug: 'alberta-security-guard-requirements',
    title: 'Alberta Security Guard Requirements: What Businesses Must Know',
    excerpt: 'Understand Alberta security guard licensing, training, and compliance requirements for hiring or contracting security services.',
    date: '2026-03-10',
    readTime: '6 min read',
    category: 'Compliance',
    keyword: 'security guard requirements Alberta',
  },
  {
    slug: 'security-risk-assessment-alberta-guide',
    title: 'Security Risk Assessment for Alberta Facilities: A Practical Guide',
    excerpt: 'Learn how a security risk assessment reduces loss, improves compliance, and protects staff at Alberta facilities.',
    date: '2026-03-03',
    readTime: '7 min read',
    category: 'Risk Management',
    keyword: 'security risk assessment Alberta',
  },
  {
    slug: 'cctv-vs-security-guards-alberta',
    title: 'CCTV vs. On-Site Guards in Alberta: Best Protection Mix',
    excerpt: 'Compare CCTV and on-site guards for Alberta businesses and learn the best security mix for your facility.',
    date: '2026-02-24',
    readTime: '5 min read',
    category: 'Strategy',
    keyword: 'CCTV vs security guards Alberta',
  },
  {
    slug: 'mobile-patrols-alberta-what-to-expect',
    title: 'Mobile Patrols for Alberta Sites: What to Expect',
    excerpt: 'Discover how mobile patrols work in Alberta, what patrol reports include, and when they\'re most effective.',
    date: '2026-02-17',
    readTime: '5 min read',
    category: 'Services',
    keyword: 'mobile security patrols Alberta',
  },
  {
    slug: 'industrial-security-fort-mcmurray-oilsands',
    title: 'Industrial Security in Fort McMurray: Best Practices for Oilsands',
    excerpt: 'Proven security practices for oilsands and industrial operations in Fort McMurray and across Alberta.',
    date: '2026-02-10',
    readTime: '8 min read',
    category: 'Industrial',
    keyword: 'industrial security Fort McMurray',
  },
];

const BLOG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Stigg Security Blog',
  url: 'https://www.stigg.ca/insights/blog',
  description: 'Expert security insights, tips, and industry news from Stigg Security — Alberta\'s trusted security company.',
  publisher: {
    '@type': 'Organization',
    name: 'Stigg Security Inc.',
    url: 'https://www.stigg.ca',
  },
  blogPost: posts.map(p => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    url: `https://www.stigg.ca/insights/blog/${p.slug}`,
  })),
};

const Blog: React.FC = () => {
  return (
    <>
      <SEO {...SEO_CONFIG['/insights/blog']} jsonLd={BLOG_SCHEMA} />
      <div className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-primary-950">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Security Insights Blog
              </h1>
              <p className="text-xl text-steel-300">
                Expert guidance on security best practices, Alberta regulations, and protecting your assets.
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white border border-steel-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent-500 bg-accent-50 px-2 py-1 rounded">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-primary-900 mb-3 leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-steel-600 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-steel-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-steel-100">
                        <Link
                          to={`/insights/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
                        >
                          Read Article <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-16 text-center bg-primary-950 rounded-2xl p-10">
                <Shield className="h-10 w-10 text-accent-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-3">Need a Security Consultation?</h2>
                <p className="text-steel-300 mb-6">Our experts are ready to assess your Alberta site and recommend the right solution.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
