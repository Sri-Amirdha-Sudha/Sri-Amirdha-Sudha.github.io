
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  name: string;
  title: string;
  description: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, description }) => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Hey, I'm <span className="text-burntOrange">{name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-burntOrange mb-8">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-12">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-burntOrange hover:bg-burntOrange-dark">
              <Link to="/contact">Get in touch</Link>
            </Button>
            <Button asChild variant="outline" className="border-burntOrange text-burntOrange hover:bg-burntOrange-lightest">
              <Link to="/projects">View my projects</Link>
            </Button>
            <Button asChild variant="outline" className="border-burntOrange text-burntOrange hover:bg-burntOrange-lightest">
              <Link to="https://drive.google.com/file/d/1NY_QW7Em-pH3BttE8jX6gmKZhBWCZfL3/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
