import React from "react";
import "./About.css";

// Import your profile image (place it inside src/assets/)

const About = () => {
  return (
    <div className="about-container">
      {/* Left Section - Profile & Skills */}
      <div className="about-left">
       
        <h2 className="skills-title">SKILLS</h2>
        <div className="skills-list">
        {[
            { category: "Programming & Analytics", skills: ["SQL (Advanced)", "Python (Pandas, NumPy, NLP)"] },
            { category: "Experimentation & Behavioral Analytics", skills: ["A/B Testing", "Attribution Modeling", "Retention Analysis", "Segmentation"] },
            { category: "Visualization & Tools", skills: ["Power BI", "Google Analytics 4", "Tableau"] },
            { category: "Data Engineering & ETL", skills: ["Data Pipelines", "Unstructured Data Processing", "API Integrations"] },
            { category: "Soft Skills", skills: ["Stakeholder Engagement", "Strategic Decision-Making", "Cross-Functional Collaboration", "Data Storytelling"] }
        ].map((item, index) => (
            <div key={index} className="skill-category">
            <h3>{item.category}</h3>
            <div className="skill-items">
                {item.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
                ))}
            </div>
            </div>
        ))}
        </div>

      </div>

      {/* Right Section - Education, Experience, Volunteering */}
      <div className="about-right">
        <div className="about-section">
          <h2>EDUCATION</h2>
          <p>
            <strong>The University of Texas at Austin – McCombs School of Business</strong><br></br>  
            Master of Science, Information Technology & Management 
          </p>
          <p>
            <strong>SRM Institute of Science and Technology</strong>  <br></br>
            Bachelor of Technology, Information Technology
          </p>
        </div>

        <div className="about-section">
          <h2>EXPERIENCE</h2>
          <h3>Marketing Analyst</h3>
          <ul>
            <li>Analyzed omnichannel trends and customer behavior to enhance digital growth.</li>
            <li>Built A/B testing frameworks to boost feature adoption and reduce churn (↑15% retention).</li>
            <li>Automated SQL-based reporting pipelines, saving 7+ hours per cycle.</li>
            <li>Improved data tracking with engineering and analytics teams for accurate insights.</li>
            <li>Led customer segmentation for 500+ users, enhancing campaign personalization.</li>
          </ul>

          <h3>Marketing Analyst</h3>
          <ul>
            <li>Built churn prediction models to identify high-risk users and intervention strategies.</li>
            <li>Integrated behavioral tracking solutions to enhance customer journey insights.</li>
            <li>Automated Power BI dashboards, reducing manual reporting by 30%.</li>
            <li>Optimized reporting processes, cutting inefficiencies and saving 10+ hours per week.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>VOLUNTEERING</h2>
          <ul>
            <li>Led a team of 25 volunteers to develop tailored teaching strategies, enhancing literacy for 30+ students.</li>
            <li>Spearheaded fundraising efforts to support education and well-being for underprivileged children.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
