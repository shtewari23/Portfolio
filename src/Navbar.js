import React, { useState } from "react";
import {
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import "./Navbar.css";
import saturn from "./images/saturn.png";

const Navbar = ({
  scrollToSection,
  homeRef,
  skillsRef,
  projectsRef,
  experienceRef,
  contactRef,
}) => {
  const [selectedNavItem, setSelectedNavItem] = useState("home"); // State to track the selected navbar item

  const handleNavItemClick = (section, ref) => {
    scrollToSection(ref);
    setSelectedNavItem(section);
  };

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1ZUYVhDMVlsc0KPCIf8g2wiA0X24nadV8/view",
      "_blank"
    ); // Replace "resume-url" with the actual URL
  };
  const handleLogoHover = (e) => {
    e.target.classList.toggle("rotate");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={saturn}
          alt="Saturn"
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoHover}
        ></img>
      </div>
      <div className="nav-items">
        <button
          style={{ color: selectedNavItem === "home" ? "white" : "" }}
          onClick={() => handleNavItemClick("home", homeRef)}
        >
          <FaHome />
          <span>Home Page</span>
        </button>
        <button
          style={{ color: selectedNavItem === "skills" ? "white" : "" }}
          onClick={() => handleNavItemClick("skills", skillsRef)}
        >
          <FaCode />
          <span>Skills</span>
        </button>
        <button
          style={{ color: selectedNavItem === "projects" ? "white" : "" }}
          onClick={() => handleNavItemClick("projects", projectsRef)}
        >
          <FaProjectDiagram />
          <span>Projects</span>
        </button>
        <button
          style={{ color: selectedNavItem === "experience" ? "white" : "" }}
          onClick={() => handleNavItemClick("experience", experienceRef)}
        >
          <FaBriefcase />
          <span>Experience</span>
        </button>
        <button
          style={{ color: selectedNavItem === "contact" ? "white" : "" }}
          onClick={() => handleNavItemClick("contact", contactRef)}
        >
          <FaEnvelope />
          <span>Contact</span>
        </button>
        <button onClick={handleResumeClick}>
          <FaFileAlt />
          <span>Resume</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
