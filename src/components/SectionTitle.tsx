
import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
      <div className="mt-2 h-1 w-20 bg-burntOrange rounded"></div>
    </div>
  );
};

export default SectionTitle;
