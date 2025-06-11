import React from 'react';
import { Layout } from '@/components/Layout';
import Header from '@/components/Header';
import CareerSection from '@/components/CareerSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';

const Career = () => {
  return (
    <>
      <Helmet>
        <title>Careers at AIIMS Care - Join Our Healthcare Team</title>
        <meta name="description" content="Join AIIMS Care's team of healthcare professionals. We offer rewarding career opportunities in nursing, medical care, and healthcare services." />
        <meta name="keywords" content="healthcare careers, nursing jobs, medical careers, AIIMS Care jobs" />
        <meta name="author" content="AIIMS Care" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.aiimscare.com/career" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aiimscare.com/career" />
      </Helmet>
      <Layout>
        <Header />
        <main className="pt-16">
          <CareerSection />
        </main>
        <Footer />
        <WhatsAppButton aria-label="Contact us on WhatsApp" />
      </Layout>
    </>
  );
};

export default Career;
