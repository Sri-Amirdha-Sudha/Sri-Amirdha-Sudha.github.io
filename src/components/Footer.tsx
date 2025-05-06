
import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center mb-6 md:mb-0 md:items-start">
            <div className="font-bold text-burntOrange text-lg">Sri Amirdha Sudha</div>
            <div className="mt-2 text-sm text-gray-500">
              <q>Turning Data Into Decisions, One Insight at a Time.</q>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/Sri-Amirdha-Sudha" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-burntOrange transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sri-amirdha-sudha/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-burntOrange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://medium.com/@sriamirdhasudha" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-burntOrange transition-colors">
                <FileText size={20} />
              </a>
            </div>
          </div>
          <div className="text-sm text-gray-500 text-center md:text-right">
            <p>© {currentYear} · Sri Amirdha Sudha</p>
            <p>Austin, TX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
