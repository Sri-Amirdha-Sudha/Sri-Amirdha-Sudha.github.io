import React from 'react';
import SectionTitle from './SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { FaMedium, FaGithub } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Get In Touch" />

        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities in marketing analytics and strategic data analysis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Email */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center p-6">
              <div className="bg-burntOrange-lightest p-4 rounded-full mb-4">
                <Mail className="h-8 w-8 text-burntOrange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:sriamirdhasudha@gmail.com" className="text-burntOrange hover:underline text-sm text-center">
                sriamirdhasudha@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* LinkedIn */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center p-6">
              <div className="bg-burntOrange-lightest p-4 rounded-full mb-4">
                <Linkedin className="h-8 w-8 text-burntOrange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/sri-amirdha-sudha/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-burntOrange hover:underline text-sm text-center"
              >
                sri-amirdha-sudha
              </a>
            </CardContent>
          </Card>

          {/* Medium */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center p-6">
              <div className="bg-burntOrange-lightest p-4 rounded-full mb-4">
                <FaMedium className="h-8 w-8 text-burntOrange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Medium</h3>
              <a
                href="https://medium.com/@sriamirdhasudha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-burntOrange hover:underline text-sm text-center"
              >
                @sriamirdhasudha
              </a>
            </CardContent>
          </Card>

          {/* GitHub */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center p-6">
              <div className="bg-burntOrange-lightest p-4 rounded-full mb-4">
                <FaGithub className="h-8 w-8 text-burntOrange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/Sri-Amirdha-Sudha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-burntOrange hover:underline text-sm text-center"
              >
                Sri-Amirdha-Sudha
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center text-gray-700">
            <MapPin className="text-burntOrange mr-2" />
            <span>Based in Austin, TX</span>
          </div>
          <p className="mt-2 text-gray-700">Currently open to collaboration and opportunities</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
