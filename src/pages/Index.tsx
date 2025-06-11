import React from 'react';
import { Layout } from '@/components/Layout';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import GallerySection from '@/components/GallerySection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <Layout
      title="Home"
      description="AIIMS Care provides professional 24/7 home nursing services, medical care, and healthcare solutions. Expert medical staff, personalized care plans, and emergency support."
      keywords="home nursing, medical care, healthcare services, 24/7 medical support, AIIMS Care"
      type="website"
    >
      <Header />
      <article className="min-h-screen">
        <section aria-labelledby="hero-heading" className="relative">
          <h1 id="hero-heading" className="sr-only">Welcome to AIIMS Care - Professional Home Nursing Services</h1>
          <HeroSection />
        </section>

        <section aria-labelledby="services-heading" className="py-16">
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          <ServicesSection />
        </section>

        <section aria-labelledby="about-heading" className="py-16 bg-gray-50">
          <h2 id="about-heading" className="sr-only">About Us</h2>
          <AboutSection />
        </section>

        <section aria-labelledby="why-choose-heading" className="py-16">
          <h2 id="why-choose-heading" className="sr-only">Why Choose AIIMS Care</h2>
          <WhyChooseSection />
        </section>

        <section aria-labelledby="testimonials-heading" className="py-16 bg-gray-50">
          <h2 id="testimonials-heading" className="sr-only">Client Testimonials</h2>
          <TestimonialsSection />
        </section>

        <section aria-labelledby="contact-heading" className="py-16">
          <h2 id="contact-heading" className="sr-only">Contact Us</h2>
          <ContactSection />
        </section>

        <section aria-labelledby="gallery-heading" className="py-16 bg-gray-50">
          <h2 id="gallery-heading" className="sr-only">Our Gallery</h2>
          <GallerySection />
        </section>

        <section aria-labelledby="faq-heading" className="py-16">
          <h2 id="faq-heading" className="sr-only">Frequently Asked Questions</h2>
          <FAQSection />
        </section>
      </article>
      
      <Footer />
      <WhatsAppButton aria-label="Contact us on WhatsApp" />
    </Layout>
  );
};

export default Index;
