import React from 'react';
import SectionTitle from './SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Database, Cloud, Wrench, BarChart, LineChart } from 'lucide-react';

// React Icons
import { FiTarget, FiMap, FiClock, FiUsers, FiClipboard } from 'react-icons/fi';
import { FaChartBar, FaChartLine, FaSearchDollar, FaFileExcel, FaBullseye } from 'react-icons/fa';
import { MdLeaderboard, MdEmail, MdOutlineAnalytics, MdDashboard } from 'react-icons/md';
import { SiTableau, SiMysql, SiPandas } from 'react-icons/si';
import { AiOutlineFundProjectionScreen, AiOutlineBarChart, AiOutlineExperiment } from 'react-icons/ai';
import { BiStats } from 'react-icons/bi';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      id: 'marketing',
      name: 'Marketing Analytics',
      icon: <BarChart className="h-5 w-5" />,
      skills: [
        { name: 'CAC Analysis', icon: <FaSearchDollar size={20} /> },
        { name: 'ROI Modeling', icon: <FaChartLine size={20} /> },
        { name: 'Conversion Metrics', icon: <MdLeaderboard size={20} /> },
        { name: 'Lead Scoring', icon: <FiTarget size={20} /> },
        { name: 'Journey Mapping', icon: <FiMap size={20} /> },
      ]
    },
    {
      id: 'forecasting',
      name: 'Forecasting & Modeling',
      icon: <LineChart className="h-5 w-5" />,
      skills: [
        { name: 'Excel Forecasting', icon: <FaFileExcel size={20} /> },
        { name: 'KPI Modeling', icon: <AiOutlineFundProjectionScreen size={20} /> },
        { name: 'Campaign Pacing', icon: <FiClock size={20} /> },
        { name: 'Cohort Reporting', icon: <FiUsers size={20} /> },
        { name: 'Segment Insights', icon: <FiClipboard size={20} /> },
      ]
    },
    {
      id: 'data',
      name: 'Data Tools',
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: 'Tableau', icon: <SiTableau size={20} /> },
        { name: 'Power BI', icon: <MdDashboard size={20} /> },  // Updated here
        { name: 'SQL', icon: <SiMysql size={20} /> },
        { name: 'Excel Advanced', icon: <FaFileExcel size={20} /> },
        { name: 'Python (Pandas)', icon: <SiPandas size={20} /> },
      ]
    },
    {
      id: 'platforms',
      name: 'Marketing Platforms',
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        { name: 'Google Analytics', icon: <MdOutlineAnalytics size={20} /> },
        { name: 'Salesforce', icon: <Cloud className="h-5 w-5" /> }, // Optionally swap with a generic cloud icon
        { name: 'Adobe Campaign Classic', icon: <MdEmail size={20} /> },
        { name: 'Paid Search', icon: <FaChartBar size={20} /> },
        { name: 'SEO', icon: <FaChartLine size={20} /> },
      ]
    },
    {
      id: 'testing',
      name: 'Testing & Analytics',
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: 'A/B Testing', icon: <AiOutlineExperiment size={20} /> },
        { name: 'Variant Design', icon: <FaBullseye size={20} /> },
        { name: 'Statistical Testing', icon: <BiStats size={20} /> },
        { name: 'Behavioral Analytics', icon: <MdOutlineAnalytics size={20} /> },
        { name: 'Funnel Tuning', icon: <Wrench className="h-5 w-5" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Skills & Expertise" />

        <div className="mt-8">
          <Tabs defaultValue="marketing" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-start mb-8 bg-transparent gap-2">
              {skillCategories.map(category => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-burntOrange data-[state=active]:text-white border border-gray-200 rounded-md"
                >
                  <span className="flex items-center">
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="pt-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">{category.name}</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="mb-2">{skill.icon}</div>
                        <span className="text-sm font-medium text-gray-700 text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
