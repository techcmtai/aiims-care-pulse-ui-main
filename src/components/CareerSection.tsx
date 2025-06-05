import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  fullName: string;
  fatherName: string;
  mobileNumber: string;
  permanentAddress: string;
  currentAddress: string;
  aadharNumber: string;
  registrationNumber: string;
  yearsExperience: string;
  fieldOfExpertise: string;
}

interface FormErrors {
  [key: string]: string;
}

const CareerSection = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    fatherName: '',
    mobileNumber: '',
    permanentAddress: '',
    currentAddress: '',
    aadharNumber: '',
    registrationNumber: '',
    yearsExperience: '',
    fieldOfExpertise: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validation
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.fatherName.trim()) newErrors.fatherName = "Father's name is required";
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required';
    if (!formData.permanentAddress.trim()) newErrors.permanentAddress = 'Permanent address is required';
    if (!formData.aadharNumber.trim()) newErrors.aadharNumber = 'Aadhar card number is required';
    if (!formData.registrationNumber.trim()) newErrors.registrationNumber = 'Registration number is required';
    if (!formData.yearsExperience.trim()) newErrors.yearsExperience = 'Years of experience is required';
    if (!formData.fieldOfExpertise.trim()) newErrors.fieldOfExpertise = 'Field of expertise is required';

    // Aadhar number format validation
    if (formData.aadharNumber && !/^\d{12}$/.test(formData.aadharNumber)) {
      newErrors.aadharNumber = 'Aadhar number must be exactly 12 digits';
    }

    // Years of experience validation
    if (formData.yearsExperience && (isNaN(Number(formData.yearsExperience)) || Number(formData.yearsExperience) < 0)) {
      newErrors.yearsExperience = 'Years of experience must be a non-negative number';
    }

    // Mobile number validation
    if (formData.mobileNumber && !/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9';
    }

    setErrors(newErrors);

    // Scroll to first error
    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = document.querySelector(`[name="${Object.keys(newErrors)[0]}"]`) as HTMLElement;
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstErrorField.focus();
      }
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, files } = e.target;
    // if (files && files[0]) {
    //   setFormData(prev => ({ ...prev, [name]: files[0] }));
      
    //   // Clear error when user selects a file
    //   if (errors[name]) {
    //     setErrors(prev => ({ ...prev, [name]: '' }));
    //   }
    // }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Create FormData for submission
        const submitData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          // if (value instanceof File) {
          //   submitData.append(key, value);
          // } else if (value) {
          if (value) {
            submitData.append(key, value);
          }
        });

        // Send to email
        const response = await fetch('https://aiims-email.vercel.app/send-career-mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Failed to submit application');
        }

        alert('Application submitted successfully! We will contact you soon.');
        
        // Reset form
        setFormData({
          fullName: '',
          fatherName: '',
          mobileNumber: '',
          permanentAddress: '',
          currentAddress: '',
          aadharNumber: '',
          registrationNumber: '',
          yearsExperience: '',
          fieldOfExpertise: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit application. Please try again or contact us directly at MyAiimscare@gmail.com');
      }
    }
  };

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a compassionate team that brings quality healthcare to homes across India. 
            Apply now to make a difference in people's lives.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`mt-1 ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  />
                  {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="mobileNumber" className="text-sm font-medium text-gray-700">
                    Mobile Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    className={`mt-1 ${errors.mobileNumber ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  />
                  {errors.mobileNumber && <p className="mt-1 text-sm text-red-600">{errors.mobileNumber}</p>}
                </div>

                <div>
                  <Label htmlFor="fatherName" className="text-sm font-medium text-gray-700">
                    Father's Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    placeholder="Enter father's name"
                    className={`mt-1 ${errors.fatherName ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  />
                  {errors.fatherName && <p className="mt-1 text-sm text-red-600">{errors.fatherName}</p>}
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="permanentAddress" className="text-sm font-medium text-gray-700">
                    Permanent Address <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="permanentAddress"
                    name="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={handleInputChange}
                    placeholder="Enter your permanent address"
                    rows={3}
                    className={`mt-1 ${errors.permanentAddress ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  />
                  {errors.permanentAddress && <p className="mt-1 text-sm text-red-600">{errors.permanentAddress}</p>}
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="currentAddress" className="text-sm font-medium text-gray-700">
                    Current Address
                  </Label>
                  <Textarea
                    id="currentAddress"
                    name="currentAddress"
                    value={formData.currentAddress}
                    onChange={handleInputChange}
                    placeholder="Enter your current address (if different from permanent)"
                    rows={3}
                    className="mt-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <Label htmlFor="aadharNumber" className="text-sm font-medium text-gray-700">
                    Aadhar Card Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="aadharNumber"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleInputChange}
                    placeholder="Enter 12-digit Aadhar number"
                    maxLength={12}
                    className={`mt-1 ${errors.aadharNumber ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  />
                  {errors.aadharNumber && <p className="mt-1 text-sm text-red-600">{errors.aadharNumber}</p>}
                </div>
              </div>
            </div>

            {/* Professional Details Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Professional Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="registrationNumber" className="text-sm font-medium text-gray-700">
                    Registration Number
                  </Label>
                  <Input
                    type="text"
                    id="registrationNumber"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    placeholder="Enter registration number"
                    className="mt-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <Label htmlFor="yearsExperience" className="text-sm font-medium text-gray-700">
                    Years of Experience <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="number"
                    id="yearsExperience"
                    name="yearsExperience"
                    value={formData.yearsExperience}
                    onChange={handleInputChange}
                    placeholder="Enter years of experience"
                    min="0"
                    className={`mt-1 ${errors.yearsExperience ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  />
                  {errors.yearsExperience && <p className="mt-1 text-sm text-red-600">{errors.yearsExperience}</p>}
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="fieldOfExpertise" className="text-sm font-medium text-gray-700">
                    Field of Expertise <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="fieldOfExpertise"
                    name="fieldOfExpertise"
                    value={formData.fieldOfExpertise}
                    onChange={handleInputChange}
                    placeholder="e.g., ICU Care, Elderly Care, Pediatric Care"
                    className={`mt-1 ${errors.fieldOfExpertise ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  />
                  {errors.fieldOfExpertise && <p className="mt-1 text-sm text-red-600">{errors.fieldOfExpertise}</p>}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
