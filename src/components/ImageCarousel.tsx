import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Using the uploaded images plus some medical care stock images
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png"
  ];

  const keywords = [
    "Injection service at home",
    "Wound dressing at home",
    "Nurse for injection at home",
    "Home visit nurse for dressing",
    "Injection at home near me",
    "Wound care service at home",
    "Nurse visit for injection",
    "One-time nurse visit at home",
    "At-home medical injection service",
    "Dressing service for wounds at home",
    "Injection service at home in Patna",
    "Wound dressing at home in Patna",
    "Home visit nurse in Patna",
    "Medical dressing at home Patna",
    "Nurse for injection at home Patna"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={images[currentIndex]}
          alt={keywords[currentIndex % keywords.length]}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform hover:scale-105"
        />
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
