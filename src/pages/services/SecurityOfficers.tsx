import React from 'react';
import { Shield } from 'lucide-react';

const SecurityOfficers = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/guard-2.jpg"
            alt="Security officer on duty"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Professional Security Officers
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Highly trained security personnel delivering exceptional protection services
              tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our security officers are more than just guards – they are highly trained
              professionals who understand the complexities of modern security challenges.
              With extensive training and experience, they provide vigilant protection
              while maintaining a professional and courteous demeanor.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span>24/7 on-site security presence</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span>Access control and visitor management</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span>Emergency response and crisis management</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span>Regular security assessments and reporting</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="/images/guard-3.jpg"
              alt="Security officer monitoring"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Training & Certification */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Training & Certification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Professional Training
              </h3>
              <p className="text-gray-600">
                Our officers undergo rigorous training programs covering security
                protocols, emergency response, and customer service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Industry Certifications
              </h3>
              <p className="text-gray-600">
                All security personnel maintain required certifications and undergo
                regular skill assessments and updates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Continuous Development
              </h3>
              <p className="text-gray-600">
                Regular training updates and professional development ensure our team
                stays current with industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityOfficers;