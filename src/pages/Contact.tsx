
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-10">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
