import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  rating: number;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, rating, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-soft border border-steel-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-warning-500 fill-warning-500' : 'text-steel-300'}`}
          />
        ))}
      </div>
      <p className="text-steel-700 mb-4 italic">{quote}</p>
      <div>
        <p className="font-semibold text-primary-950">{author}</p>
        <p className="text-steel-500 text-sm">{position}</p>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Stigg Security has transformed how we approach protection at our manufacturing facility. Their guards are professional, vigilant, and have prevented several potential security incidents.",
      author: "Michael Reynolds",
      position: "Operations Director, NorthStar Manufacturing",
      rating: 5,
    },
    {
      quote: "The camera system installed by Stigg has been a game-changer for our retail locations. Crystal clear footage and their quick response to alerts have significantly reduced theft incidents.",
      author: "Sarah Johnson",
      position: "Regional Manager, Urban Retail Group",
      rating: 5,
    },
    {
      quote: "We've worked with several security companies over the years, but none have matched Stigg's level of service. Their team is responsive, thorough, and genuinely cares about our protection needs.",
      author: "David Chen",
      position: "Property Manager, Horizon Properties",
      rating: 5,
    },
    {
      quote: "After experiencing a break-in, we hired Stigg for our office security. Their comprehensive approach, combining guards and technology, has given our entire team peace of mind.",
      author: "Amanda Torres",
      position: "CEO, Innovate Solutions",
      rating: 4,
    },
    {
      quote: "The alarm monitoring service has been excellent. When we had an actual emergency, their team responded within minutes and coordinated perfectly with local authorities.",
      author: "Robert Keller",
      position: "Facility Manager, TechHub Alberta",
      rating: 5,
    },
    {
      quote: "Professional, punctual, and proactive. Stigg's security team for our annual conference exceeded our expectations and handled a potentially difficult situation with remarkable skill.",
      author: "Jessica Wong",
      position: "Event Director, Global Connections",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-steel-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-steel-600">
            Don't just take our word for it. Here's what businesses across Alberta have to say about our security services.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              rating={testimonial.rating}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center bg-primary-900 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to experience industry-leading security?</h3>
          <p className="text-steel-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Stigg Security with their protection needs.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Get Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;