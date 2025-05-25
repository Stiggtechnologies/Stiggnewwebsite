import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset submission state after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-6">Get In Touch</h2>
            <p className="text-lg text-steel-700 mb-8">
              Have questions about our security services? Contact us today for a free consultation and personalized security assessment.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-950">Call Us</h3>
                  <p className="text-steel-600">(780) XXX-XXXX</p>
                  <p className="text-steel-500 text-sm">Available 24/7 for emergencies</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-950">Email Us</h3>
                  <p className="text-steel-600">admin@stigg.ca</p>
                  <p className="text-steel-500 text-sm">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-950">Location</h3>
                  <p className="text-steel-600">Fort McMurray, Alberta</p>
                  <p className="text-steel-500 text-sm">Serving clients across Alberta</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden h-64 shadow-lg">
              <img 
                src={new URL('/images/guard-2.jpg', import.meta.url).href}
                alt="Security guard on duty" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-soft-lg border border-steel-100 p-8">
              <h3 className="text-2xl font-bold text-primary-950 mb-6">Request a Free Quote</h3>
              
              {submitted ? (
                <motion.div 
                  className="bg-success-50 border border-success-200 rounded-lg p-4 text-success-800 flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <svg className="h-5 w-5 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm mt-1">We'll be in touch with you shortly.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-steel-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-error-500' : 'border-steel-300'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-error-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-steel-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-error-500' : 'border-steel-300'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-error-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-steel-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${errors.phone ? 'border-error-500' : 'border-steel-300'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                        placeholder="(123) 456-7890"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-error-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-steel-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.service ? 'border-error-500' : 'border-steel-300'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    >
                      <option value="">Select a service</option>
                      <option value="security-guards">Security Guards</option>
                      <option value="alarm-monitoring">Alarm Monitoring</option>
                      <option value="camera-systems">Camera Systems</option>
                      <option value="access-control">Access Control</option>
                      <option value="event-security">Event Security</option>
                      <option value="risk-assessment">Risk Assessment</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-error-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.service}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-steel-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-error-500' : 'border-steel-300'} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                      placeholder="Tell us about your security needs..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-error-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="accent" 
                    size="lg" 
                    fullWidth
                    disabled={isSubmitting}
                    className="flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;