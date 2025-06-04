
import React from 'react';
import Header from '@/components/Header';
import CareerSection from '@/components/CareerSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Career = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <CareerSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Career;
