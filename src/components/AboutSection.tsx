import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
const AboutSection = () => {
  const stats = [{
    number: "500+",
    label: "Happy Families"
  }, {
    number: "24/7",
    label: "Availability"
  }, {
    number: "100%",
    label: "Certified Nurses"
  }, {
    number: "5⭐",
    label: "Average Rating"
  }];
  const images = [{
    src: "/images/5.png",
    alt: "Professional nurse providing care",
    caption: "Certified nursing professionals"
  }, {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&auto=format",
    alt: "Home medical equipment setup",
    caption: "Advanced medical equipment"
  }, {
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&auto=format",
    alt: "Elderly care at home",
    caption: "Compassionate elderly care"
  }];
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About AIIMS Care</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing hospital-quality medical care to your doorstep with compassion and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              AIIMS Care was founded with a simple yet powerful vision: to make quality healthcare accessible 
              in the comfort of your home. We understand that hospitals can be overwhelming, and sometimes 
              the best healing happens in familiar surroundings.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of government-certified nurses brings years of experience from leading medical 
              institutions across India. We combine clinical expertise with genuine compassion to deliver 
              personalized care that addresses both medical needs and emotional well-being.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Government-certified and experienced nursing professionals</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Strict infection control protocols and safety measures</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">24/7 emergency response and support system</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Personalized care plans tailored to individual needs</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => <div key={index} className="relative group overflow-hidden rounded-lg animate-fade-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <img src={image.src} alt={image.alt} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                
              </div>)}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default AboutSection;