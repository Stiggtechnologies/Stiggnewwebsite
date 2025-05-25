import React from 'react';
import { Shield, Car, Phone24, Clock, MapPin, Users } from 'lucide-react';

const MobileSecurity = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Mobile Security Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Rapid response security solutions providing dynamic protection for your assets and premises 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Car className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile Patrols</h3>
              <p className="text-gray-600">
                Regular vehicle patrols providing visible security presence and deterrence.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Phone24 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Rapid Response</h3>
              <p className="text-gray-600">
                Swift emergency response to alarms and security incidents.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 Coverage</h3>
              <p className="text-gray-600">
                Round-the-clock security coverage and monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Details */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mobile Security Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Lock & Unlock Services</h3>
                <p className="text-gray-600">
                  Professional opening and closing of premises, ensuring your property is secure outside business hours.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">GPS Tracking</h3>
                <p className="text-gray-600">
                  Real-time tracking and monitoring of security patrols for optimal coverage and response times.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Trained Personnel</h3>
                <p className="text-gray-600">
                  Highly trained and licensed security officers with extensive mobile patrol experience.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Car className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Marked Vehicles</h3>
                <p className="text-gray-600">
                  Professionally branded security vehicles providing visible deterrence and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Property?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your mobile security requirements.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSecurity;