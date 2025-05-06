
import React from 'react';
import Navbar from '@/components/Navbar';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';

const Experience = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-10">
        <ExperienceSection />
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
