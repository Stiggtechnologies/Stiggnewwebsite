import React from 'react';
import { Shield } from 'lucide-react';

const Manufacturing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Manufacturing Security Solutions</h1>
            <p className="text-xl mb-8">Protecting your manufacturing facilities, assets, and intellectual property with comprehensive security solutions tailored to the manufacturing industry.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Key Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Access Control</h3>
            <p className="text-gray-600">Advanced access control systems to monitor and regulate entry to sensitive areas of your manufacturing facility.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Perimeter Security</h3>
            <p className="text-gray-600">Comprehensive perimeter protection with surveillance systems and security personnel.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">IP Protection</h3>
            <p className="text-gray-600">Safeguarding your intellectual property and sensitive manufacturing processes.</p>
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="bg-gray-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Industry Expertise</h2>
          <p className="text-lg text-gray-700 mb-6">
            With decades of experience in manufacturing security, we understand the unique challenges and requirements of protecting manufacturing facilities. Our solutions are designed to ensure operational continuity while maintaining the highest security standards.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-center text-gray-700">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              24/7 Security Operations
            </li>
            <li className="flex items-center text-gray-700">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              Emergency Response Planning
            </li>
            <li className="flex items-center text-gray-700">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              Supply Chain Security
            </li>
            <li className="flex items-center text-gray-700">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              Risk Assessment Services
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Secure Your Manufacturing Facility</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us to discuss how we can help protect your manufacturing operations with our comprehensive security solutions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;