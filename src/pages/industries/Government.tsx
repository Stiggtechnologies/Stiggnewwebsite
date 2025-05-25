import React from 'react';
import { Shield } from 'lucide-react';

const Government = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-blue-600" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900">Government Security Solutions</h1>
          <p className="mt-2 text-lg text-gray-600">
            Protecting government facilities and assets with advanced security measures
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">Facility Security</h3>
            <p className="mt-2 text-gray-600">
              Comprehensive security solutions for government buildings and facilities
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">Personnel Protection</h3>
            <p className="mt-2 text-gray-600">
              Specialized security details for government officials and staff
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">Access Control</h3>
            <p className="mt-2 text-gray-600">
              Advanced access management systems for secure areas
            </p>
          </div>
        </div>

        <div className="mt-12 prose prose-blue max-w-none">
          <h2>Trusted Government Security Partner</h2>
          <p>
            We understand the unique security challenges faced by government institutions. Our security solutions are designed to meet the highest standards of protection while ensuring operational efficiency and compliance with all relevant regulations.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>24/7 security monitoring and response</li>
            <li>Classified information protection protocols</li>
            <li>Emergency response coordination</li>
            <li>Integration with existing security infrastructure</li>
            <li>Regular security audits and assessments</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Government;