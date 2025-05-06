
import React from 'react';
import Navbar from '@/components/Navbar';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';

const Skills = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-10">
        <SkillsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
