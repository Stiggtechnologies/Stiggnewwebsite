import React from 'react';
import { Shield } from 'lucide-react';

const RiskConsulting = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Risk Consulting Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive risk assessment and mitigation strategies to protect your business
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Risk Assessment</h3>
              <p className="text-gray-600">
                Thorough evaluation of security risks and vulnerabilities in your organization
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Security Planning</h3>
              <p className="text-gray-600">
                Development of comprehensive security strategies and protocols
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Crisis Management</h3>
              <p className="text-gray-600">
                Emergency response planning and crisis management solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Methodology</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 rounded-full p-2">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                  <p className="text-gray-600">
                    Comprehensive evaluation of your current security posture and potential risks
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 rounded-full p-2">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Analysis</h3>
                  <p className="text-gray-600">
                    Detailed analysis of findings and development of mitigation strategies
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 rounded-full p-2">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                  <p className="text-gray-600">
                    Execution of security measures and ongoing monitoring of effectiveness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a consultation with our risk management experts
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiskConsulting;