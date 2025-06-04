import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServicesSection = () => {
  const transactionalServices = [
    {
      title: "Injection Administration",
      description: "Safe and sterile injection procedures by certified nurses",
      icon: "💉",
      details: "Intramuscular, subcutaneous, and intravenous injections"
    },
    {
      title: "Intravenous Cannulation",
      description: "Professional IV line insertion and maintenance",
      icon: "🩸",
      details: "Sterile technique with minimal discomfort"
    },
    {
      title: "IV Fluid Administration",
      description: "Monitored intravenous fluid therapy at home",
      icon: "💧",
      details: "Regular monitoring and safe administration"
    },
    {
      title: "Wound & Diabetic Wound Dressing",
      description: "Specialized wound care and dressing changes",
      icon: "🩹",
      details: "Advanced wound healing techniques"
    },
    {
      title: "Bed Sore Care",
      description: "Prevention and treatment of pressure ulcers",
      icon: "🛏️",
      details: "Comprehensive skin care and positioning"
    },
    {
      title: "Catheterization",
      description: "Urinary catheter insertion and maintenance",
      icon: "🫧",
      details: "Sterile procedure with patient comfort priority"
    },
    {
      title: "Nasogastric Intubation",
      description: "NG tube insertion and feeding support",
      icon: "🍽️",
      details: "Safe enteral nutrition delivery"
    },
    {
      title: "Ryle's Tube Feeding",
      description: "Nutritional support via feeding tube",
      icon: "🥛",
      details: "Monitored nutrition delivery system"
    },
    {
      title: "Tracheostomy Care",
      description: "Specialized care for tracheostomy tubes",
      icon: "🫁",
      details: "Expert airway management and tube care"
    },
    {
      title: "PEG Care",
      description: "Specialized care for PEG feeding tubes",
      icon: "💊",
      details: "Expert feeding tube management and care"
    },
    {
      title: "Peritoneal Dialysis",
      description: "Home-based peritoneal dialysis support",
      icon: "🩺",
      details: "Continuous ambulatory peritoneal dialysis"
    }
  ];

  const continuousServices = [
    {
      title: "Basic Nursing Care",
      description: "Essential daily nursing support and monitoring",
      icon: "👩‍⚕️",
      details: "Vital signs monitoring, medication management"
    },
    {
      title: "Advanced Nursing Support",
      description: "Complex medical care for critical conditions",
      icon: "🏥",
      details: "ICU-level care at home environment"
    },
    {
      title: "Specialized Chronic Care",
      description: "Long-term care for chronic medical conditions",
      icon: "📊",
      details: "Diabetes, hypertension, cardiac care"
    },
    {
      title: "Elderly & Palliative Care",
      description: "Compassionate care for seniors and end-of-life support",
      icon: "👴",
      details: "Dignity and comfort-focused care"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive nursing care services delivered by certified professionals in the comfort of your home
          </p>
        </div>

        {/* Transactional Nursing Care */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🔹 Transactional Nursing Care
            </h3>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Specific medical procedures and treatments performed by our skilled nursing team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {transactionalServices.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border border-blue-100 hover:border-blue-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-2">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-3">
                    {service.description}
                  </CardDescription>
                  <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                    {service.details}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Continuous Nursing Care */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🔹 Continuous Nursing Care
            </h3>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Ongoing medical support and comprehensive care for long-term health management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {continuousServices.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border border-green-100 hover:border-green-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-2">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-3">
                    {service.description}
                  </CardDescription>
                  <Badge variant="secondary" className="text-xs bg-green-50 text-green-700">
                    {service.details}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-600 mb-6">Need a custom care plan? We're here to help.</p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Consult Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
