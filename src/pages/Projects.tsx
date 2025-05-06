
import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-10">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
