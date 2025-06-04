
import React from 'react';
import { Phone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is included in Advanced Nursing Care?",
      answer: "Advanced Nursing Care includes complex medical procedures such as IV administration, wound management, medication management, vital signs monitoring, and specialized care for chronic conditions. Our nurses are trained to handle ICU-level care in a home environment."
    },
    {
      question: "Are your nurses certified and experienced?",
      answer: "Yes, all our nurses are government-certified and have extensive experience in hospital and clinical settings. They undergo regular training updates and are required to maintain their certifications. Many of our nurses have worked in leading hospitals across India."
    },
    {
      question: "Do you provide 24/7 service?",
      answer: "Absolutely! We offer round-the-clock nursing care and emergency response services. Our 24/7 hotline ensures that you can reach us anytime for emergency situations or urgent medical needs."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently provide services in Delhi NCR, Mumbai, Bangalore, and surrounding metropolitan areas. We're rapidly expanding to other cities. Contact us to check if we serve your specific location."
    },
    {
      question: "How quickly can you arrange a nurse?",
      answer: "For routine appointments, we can arrange a nurse within 4-6 hours. For urgent care, we typically respond within 2 hours. Emergency situations receive immediate attention with our rapid response team."
    },
    {
      question: "What safety protocols do you follow?",
      answer: "We follow strict hospital-grade infection control protocols including proper PPE usage, equipment sterilization, hand hygiene, and regular health screenings for all staff. All procedures are performed following WHO and Ministry of Health guidelines."
    },
    {
      question: "Can you provide long-term care for chronic conditions?",
      answer: "Yes, we specialize in long-term continuous care for patients with chronic conditions such as diabetes, hypertension, cardiac issues, and post-surgical recovery. We create personalized care plans in consultation with your doctors."
    },
    {
      question: "How do you coordinate with my existing doctor?",
      answer: "We work closely with your existing healthcare team. Our nurses maintain detailed reports and communicate regularly with your doctors to ensure continuity of care. We can also arrange for doctor consultations at home if needed."
    },
    {
      question: "What equipment do you provide?",
      answer: "We bring all necessary medical equipment including IV stands, monitors, wound care supplies, and specialized devices as needed. All equipment is sterile, well-maintained, and regularly inspected for safety."
    },
    {
      question: "How are your services priced?",
      answer: "Our pricing is transparent and competitive. Costs vary based on the type of care, duration, and complexity of services required. We provide detailed estimates upfront with no hidden charges. Contact us for a personalized quote."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our nursing care services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg border shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-blue-600 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:8766382620"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Us Now
            </a>
            <a 
              href="https://wa.me/918766382620"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
