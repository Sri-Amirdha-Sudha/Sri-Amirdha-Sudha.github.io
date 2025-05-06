import React from 'react';
import SectionTitle from './SectionTitle';

interface Experience {
  company: string;
  location: string;
  title: string;
  period: string;
  description: string;
  techStack?: string[];
}

const experiences: Experience[] = [
  {
    company: "InfraSingularity (Capstone)",
    location: "Austin, USA",
    title: "Lead Business Analyst",
    period: "Jan 2025 – Present",
    description:
      "Leading UI/UX planning and real-time integrations for monitoring decentralized validator performance on EigenLayer.",
    techStack: ["API Integration", "Crypto Analytics", "React", "Python", "Figma", "Agile"],
  },
  {
    company: "AstraZeneca Pvt. Ltd.",
    location: "Chennai, India",
    title: "Business Intelligence Analyst",
    period: "Jul 2023 – Jun 2024",
    description:
      "Delivered automated insights and predictive models for EU/Canada markets, enhancing campaign precision and reporting.",
    techStack: ["Power BI", "SQL", "Python", "Predictive Modeling", "Marketing Automation", "CRM"],
  },
  {
    company: "AstraZeneca Pvt. Ltd.",
    location: "Chennai, India",
    title: "Junior Business Intelligence Analyst",
    period: "Jul 2022 – Jun 2023",
    description:
      "Supported omnichannel analytics, A/B testing frameworks, and data solutions to improve campaign ROI and retention.",
    techStack: ["A/B Testing", "Excel", "Segmentation", "SQL", "Customer Analytics"],
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Experience" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Left Column */}
              <div className="md:col-span-1 text-left md:text-right pr-4 border-l-4 md:border-l-0 md:border-r-4 border-burntOrange">
                <div className="text-burntOrange font-semibold text-md">{exp.company}</div>
                <div className="text-gray-500 text-sm">{exp.location}</div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-3 space-y-2">
                <h3 className="text-lg font-semibold">
                  {exp.title} <span className="text-gray-400"></span>
                </h3>
                <div className="text-sm text-gray-500">{exp.period}</div>
                <p className="text-gray-700">{exp.description}</p>
                {exp.techStack && (
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">Tech Stack: </span>
                    {exp.techStack.join(', ')}
                  </p>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
