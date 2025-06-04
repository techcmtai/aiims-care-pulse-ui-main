import React, { useState } from 'react';
import { X } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: "/lovable-uploads/738bddb7-f840-4ee1-876f-52e141f00bb4.png",
      alt: "Compassionate care for elderly patients",
      caption: "Professional home care assistance"
    },
    {
      src: "/lovable-uploads/03be5b02-c838-4b06-b58f-436c153608c1.png", 
      alt: "Family support and care",
      caption: "Bringing families together through care"
    },
    {
      src: "/lovable-uploads/ab50e137-0fa1-4b94-abe8-6740a0ef5e19.png",
      alt: "Home healthcare environment",
      caption: "Quality care in the comfort of home"
    },
    {
      src: "/images/5.png",
      alt: "Professional nursing care",
      caption: "Certified medical professionals"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&auto=format",
      alt: "Medical equipment setup",
      caption: "Advanced medical equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&auto=format",
      alt: "Elderly care services",
      caption: "Specialized elderly care"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Care in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we bring professional medical care and genuine compassion to families across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img 
                src={selectedImage} 
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
