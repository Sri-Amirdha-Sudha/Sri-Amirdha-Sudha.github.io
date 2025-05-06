import React from 'react';
import SectionTitle from './SectionTitle';
import { Badge } from '@/components/ui/badge';
import { SiNike } from "react-icons/si";
import { FaMedium, FaYoutube, FaShoppingCart } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tags: string[];
  mediumLink?: string;
  icon?: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Customer Segmentation for Retail Business",
    description:
      "Conducted K-means clustering on Walmart shopper data to identify five behavioral personas. These insights improved marketing personalization and campaign precision, driving better segmentation ROI.",
    tags: ["Customer Segmentation", "K-means", "Marketing Analytics", "Clustering"],
    mediumLink:
      "https://medium.com/@sriamirdhasudha/customer-segmentation-a-beginners-guide-to-understanding-your-customers-with-python-0af5de056917",
    icon: <FaShoppingCart size={24} className="text-burntOrange" />
  },
  {
    title: "YouTube Tech Device Sentiment Analysis",
    description:
      "Built a custom NLP pipeline with Hugging Face and RAG to analyze sentiment from 40K+ YouTube comments. Extracted user emotion and feature feedback to deliver brand-level insight from social conversations.",
    tags: ["Sentiment Analysis", "RAG", "Hugging Face", "NLP", "Python"],
    mediumLink:
      "https://medium.com/@sriamirdhasudha/how-ai-reads-customer-feedback-a-rag-powered-approach-to-sentiment-analysis-f5900429cbbf",
    icon: <FaYoutube size={24} className="text-burntOrange" />
  },
  {
    title: "Brand Engagement Analytics for Social Media",
    description:
      "Analyzed 500+ Instagram posts using Google Vision and topic modeling to surface top-performing content patterns. This guided Nike’s strategy across visuals, captions, and audience resonance.",
    tags: ["Computer Vision", "Google Vision", "LDA", "Content Strategy", "Social Media Analytics"],
    mediumLink:
      "https://medium.com/@sriamirdhasudha/unveiling-brand-insights-from-instagram-a-case-study-of-nike-using-python-e352122b256a",
    icon: <SiNike size={24} className="text-burntOrange" />
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Projects" />
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="border-l-4 border-burntOrange pl-6 relative">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  {project.icon}
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                </div>
                {project.mediumLink && (
                  <a
                    href={project.mediumLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burntOrange hover:text-burntOrange-dark flex items-center text-sm"
                  >
                    <FaMedium className="mr-1" />
                    Medium
                  </a>
                )}
              </div>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    className="bg-burntOrange-lightest text-burntOrange border-burntOrange-lighter"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
