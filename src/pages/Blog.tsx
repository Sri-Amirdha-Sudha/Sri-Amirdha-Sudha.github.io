
import React from 'react';
import Navbar from '@/components/Navbar';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-10">
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
