import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">SRI AMIRDHA SUDHA</h2>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/projects">PROJECTS</Link>
        <a href="https://medium.com/@sriamirdhasudha" target="_blank" rel="noopener noreferrer">BLOG</a>
        <Link to="/about">ABOUT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
