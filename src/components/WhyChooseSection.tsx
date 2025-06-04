
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WhyChooseSection = () => {
  const features = [
    {
      icon: "🕐",
      title: "24/7 Availability",
      description: "Round-the-clock medical support and emergency response whenever you need it",
      stats: "Available 365 days"
    },
    {
      icon: "👩‍⚕️",
      title: "Government-Certified Nurses",
      description: "All our nurses are certified by recognized medical boards with extensive training",
      stats: "100% Certified Staff"
    },
    {
      icon: "🛡️",
      title: "Infection-Control Protocols",
      description: "Strict adherence to medical safety standards and sterilization procedures",
      stats: "Hospital-grade Safety"
    },
    {
      icon: "🚨",
      title: "Emergency Response System",
      description: "Rapid response team for medical emergencies with direct hospital coordination",
      stats: "< 30 min Response"
    },
    {
      icon: "💝",
      title: "Compassionate Care",
      description: "Patient-centered approach focusing on comfort, dignity, and emotional support",
      stats: "5-Star Care Rating"
    },
    {
      icon: "🏠",
      title: "Home Comfort",
      description: "Receive professional medical care in the familiar comfort of your own home",
      stats: "Stress-free Environment"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AIIMS Care?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of professional healthcare with a personal touch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0">
              <CardHeader className="text-center pb-2">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {feature.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Satisfaction Animation */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Satisfaction</h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-8 h-8 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-3xl font-bold text-blue-600 mb-2">98.5%</p>
            <p className="text-gray-600">Patient Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
