import React from "react";
import "./Home.css";
import resumePDF from "../assets/Resume.pdf";
import profileImage from "../assets/profile.jpeg"
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="image-container">
          <img src={profileImage} alt="Sri Amirdha Sudha" className="profile-image" />
        </div>
        <div className="text-content">
          <h1>Hi!<br /> I'm Sri Amirdha Sudha</h1>
          <p>
          I'm a Graduate Student at the University of Texas at Austin - McCombs School of Business, pursuing an MS in Information Technology and Management. Passionate about data analytics in marketing, I love uncovering insights that drive strategic decisions. <br></br>
          When I’m not deep-diving into data, you’ll find me sharing my knowledge through blogs, simplifying complex analytics concepts for others. Creativity fuels me beyond numbers—I enjoy Mandala art, a meditative escape that balances my analytical mindset. <br></br>
          Oh, and I speak Tamil, one of the world’s oldest and most poetic languages—a connection to history that I truly cherish.
          </p>
          <a href={resumePDF} download className="download-btn">Download Resume</a><br></br>
          <a href="https://www.linkedin.com/in/sri-amirdha-sudha/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/Sri-Amirdha-Sudha" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
