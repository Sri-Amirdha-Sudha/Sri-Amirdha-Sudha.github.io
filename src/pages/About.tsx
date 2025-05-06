
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-10">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
