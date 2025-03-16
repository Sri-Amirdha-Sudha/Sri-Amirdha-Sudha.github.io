import React from "react";
import "./Projects.css";

// Import your images (place them inside src/assets/)
import project1 from "../assets/rag.png";
import project2 from "../assets/citi.png";
import project3 from "../assets/nike.png";
import project4 from "../assets/walmart.png";
import project5 from "../assets/marketPulse.png";
import project6 from "../assets/haas.png";

const Projects = () => {
  const projects = [
    { id: 1, title: "AI-Powered Sentiment Analysis for YouTube Tech Reviews (RAG)", description: "Built a RAG-based NLP model analyzing 40K+ unstructured YouTube comments, extracting user sentiment and product feature insights. Developed a data pipeline to clean and structure text data, enabling scalable retrieval-augmented analytics for business.", image: project1 , link:"https://github.com/Sri-Amirdha-Sudha/TechReview_YT_RAG"},
    { id: 2, title: "Optimizing Bike-Sharing: Predictive Insights for Citi Bike Demand in NYC", description: "Developed time-series and machine learning models (Random Forest) to forecast bike demand, optimizing availability using weather and holiday data. Presented insights through Python visualizations, driving data-driven planning.", image: project2 , link: "https://medium.com/@pnzender/revolutionizing-bike-sharing-with-data-science-predicting-citi-bike-rentals-in-nyc-d0258ec0f5b4"},
    { id: 3, title: "Unveiling Brand Insights from Instagram: A Case Study of Nike Using Python", description: "Scraped ~500 posts, extracted image labels via Google Vision API, and classified engagement levels. Built logistic regression models and applied LDA topic modeling to identify key themes driving content performance.", image: project3, link: "https://medium.com/@sriamirdhasudha/unveiling-brand-insights-from-instagram-a-case-study-of-nike-using-python-e352122b256a" },
    { id: 4, title: "Customer Segmentation for Retail Business", description: "Leveraged K-means clustering on Walmart sales data to identify distinct customer segments based on purchasing behavior, providing actionable insights that enabled marketing and product teams to refine strategies and enhance customer targeting.", image: project4, link: "https://github.com/Sri-Amirdha-Sudha/customer-segmentation-walmart" },
    { id: 5, title: "Audible Insights Dashboard", description: "Developed an interactive Power BI dashboard analyzing 1,000+ bestseller data points. Data collection using Python and Selenium, improving accuracy by 3%. Delivered actionable insights through data storytelling, driving strategic decision-making.", image: project5, link: "https://github.com/Sri-Amirdha-Sudha/marketPulse" },
    { id: 6, title: "HaaS Manager", description: "Architectured a Proof of Concept (PoC) web application for a Hardware-as-a-Service (HaaS) system, focusing on secure user management, resource allocation, and scalability", image: project6, link: "https://github.com/arsilva02/APAD" },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="know-more-btn">Know More</button></a>
            <h3 className="project-heading">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
