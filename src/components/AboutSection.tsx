
import React from 'react';
import SectionTitle from './SectionTitle';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="text-gray-700 mb-4">
              I'm a Master's student in Information Technology & Management at UT Austin - McCombs School of Business, with an expected graduation date of May 2025. 
              I'm currently based in Austin, TX and am open to relocation for the right opportunity.
            </p>
            
            <p className="text-gray-700 mb-4">
              With <span className="text-burntOrange font-semibold">2.5 years of experience in data and marketing analytics</span>, I've delivered a 12% 
              boost in marketing ROI and a 9% increase in user engagement through data-driven strategies. I'm skilled in SQL, Python, and BI tools, and have 
              experience with marketing funnel analysis, forecasting, and data visualization.
            </p>
            
            <p className="text-gray-700">
              I've previously worked at AstraZeneca Pvt. Ltd. as a Business Intelligence Analyst and at InfraSingularity as a Lead Business Analyst. I'm passionate 
              about using data to drive business decisions and am seeking marketing analytics and strategic data analysis roles in the US.
            </p>
          </div>
          
          <div>
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5 text-burntOrange" />
                      <span>Education</span>
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-medium">UT Austin - McCombs School of Business</h4>
                        <p className="text-sm text-gray-500">MS, Information Technology & Management · 2024-2025</p>
                      </div>
                      <div>
                        <h4 className="font-medium">SRM Institute of Science and Technology</h4>
                        <p className="text-sm text-gray-500">BTech, Information Technology · 2022</p>
                        <p className="text-sm text-gray-500">2nd rank in the IT department</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold">Areas of Expertise</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-burntOrange-lightest text-burntOrange rounded-full text-sm">Marketing Analytics</span>
                      <span className="px-3 py-1 bg-burntOrange-lightest text-burntOrange rounded-full text-sm">Data Analysis</span>
                      <span className="px-3 py-1 bg-burntOrange-lightest text-burntOrange rounded-full text-sm">Business Intelligence</span>
                      <span className="px-3 py-1 bg-burntOrange-lightest text-burntOrange rounded-full text-sm">Predictive Modeling</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold">Technical Skills</h3>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm text-center">SQL</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm text-center">Python</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm text-center">Tableau</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm text-center">Power BI</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm text-center">Excel (Advanced)</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm text-center">A/B Testing</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
