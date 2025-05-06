import React from 'react';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';
import { FaMedium } from 'react-icons/fa';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  platform: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "A/B Testing in Marketing with Python",
    description: "Explore how A/B testing helps optimize marketing outcomes using Python and real-world retail examples.",
    date: "Feb 23, 2024",
    platform: "Medium",
    link: "https://medium.com/@sriamirdhasudha/a-b-testing-in-marketing-with-python-1a50090401a8"
  },
  {
    title: "Predicting Customer Churn with Machine Learning",
    description: "Learn how to predict churn using classification models and customer behavior signals in Python.",
    date: "Feb 17, 2024",
    platform: "Medium",
    link: "https://medium.com/@sriamirdhasudha/predicting-customer-churn-with-machine-learning-python-70993bd016a8"
  },
  {
    title: "Understanding the Marketing Funnel",
    description: "From awareness to advocacy, understand how customer journeys can be tracked and improved.",
    date: "Jan 27, 2024",
    platform: "Medium",
    link: "https://medium.com/@sriamirdhasudha/understanding-the-marketing-funnel-the-journey-between-awareness-to-advocacy-18c001ed82b6"
  },
  {
    title: "Connect GA4 to Your Site with GTM",
    description: "A quick-start guide to hooking up your website with Google Analytics 4 using Google Tag Manager.",
    date: "Jan 25, 2024",
    platform: "Medium",
    link: "https://medium.com/@sriamirdhasudha/connect-your-website-to-ga4-with-google-tag-manager-gtm-21d6f9b59d63"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Blog & Publications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">{post.date}</span>
                {post.platform === "Medium" && (
                  <div className="flex items-center text-burntOrange text-sm">
                    <FaMedium className="mr-1" />
                    Medium
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{post.description}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-burntOrange font-medium inline-flex items-center hover:underline"
              >
                Read article <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://medium.com/@sriamirdhasudha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-burntOrange hover:text-burntOrange-dark font-medium inline-flex items-center text-sm"
          >
            View all articles on Medium
            <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
