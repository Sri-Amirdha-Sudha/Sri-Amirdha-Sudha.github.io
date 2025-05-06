
import React from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero 
        name="Sri Amirdha Sudha"
        title="Marketing Data Analyst | MSITM'25 - UT Austin"
        description="Business Analyst with 2.5 years of experience in data and marketing analytics. Delivered a 12% boost in marketing ROI through data-driven strategies. Currently seeking marketing analytics and strategic data analysis roles in the US."
      />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
