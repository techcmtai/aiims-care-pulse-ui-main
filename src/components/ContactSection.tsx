
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone } from 'lucide-react';

const ContactSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    address: '',
    timeSlot: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            <Input
              placeholder="Full Name *"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full"
            />
            <Input
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full"
            />
            <Input
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full"
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Details</h3>
            <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Service Type *" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="injection">Injection Administration</SelectItem>
                <SelectItem value="iv-cannulation">IV Cannulation</SelectItem>
                <SelectItem value="wound-dressing">Wound Dressing</SelectItem>
                <SelectItem value="catheterization">Catheterization</SelectItem>
                <SelectItem value="basic-nursing">Basic Nursing Care</SelectItem>
                <SelectItem value="advanced-nursing">Advanced Nursing Care</SelectItem>
                <SelectItem value="elderly-care">Elderly Care</SelectItem>
                <SelectItem value="other">Other (Please specify in message)</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Additional details or special requirements"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="w-full"
              rows={4}
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Location & Schedule</h3>
            <Textarea
              placeholder="Complete Address *"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-full"
              rows={3}
            />
            <Select onValueChange={(value) => handleInputChange('timeSlot', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Preferred Time Slot *" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (6 AM - 12 PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12 PM - 6 PM)</SelectItem>
                <SelectItem value="evening">Evening (6 PM - 10 PM)</SelectItem>
                <SelectItem value="night">Night (10 PM - 6 AM)</SelectItem>
                <SelectItem value="emergency">Emergency (Immediate)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Review & Confirm</h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Service:</strong> {formData.serviceType}</p>
              <p><strong>Time Slot:</strong> {formData.timeSlot}</p>
              <p><strong>Address:</strong> {formData.address}</p>
            </div>
            <p className="text-sm text-gray-600">
              Our team will contact you within 30 minutes to confirm the appointment details.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule professional nursing care in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Multi-step Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-center">
                <div className="flex justify-center space-x-4 mb-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step <= currentStep
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
                Step {currentStep} of 4
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {renderStep()}
                
                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button type="button" onClick={nextStep}>
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                      Book Appointment
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0">
              <CardHeader>
                <CardTitle className="text-white">Emergency Hotline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">24/7 Emergency</p>
                      <a href="tel:9560028504" className="text-lg font-bold hover:underline">
                        8766382620
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">General Enquiries</p>
                      <a href="tel:8766382620" className="text-lg font-bold hover:underline">
                        9136817423
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white border-0">
              <CardHeader>
                <CardTitle className="text-white">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a 
                    href="mailto:MyAiimscare@gmail.com"
                    className="flex items-center space-x-3 hover:bg-green-800 p-2 rounded transition-colors"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p>MyAiimscare@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/918766382620"
                    className="flex items-center space-x-3 hover:bg-green-800 p-2 rounded transition-colors"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p>Chat with us instantly</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Service Area Map</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  We currently serve Delhi NCR, Mumbai, Bangalore, and surrounding areas. 
                  Contact us to check availability in your location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
