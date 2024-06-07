import React, { useEffect, useRef } from "react";
import "./Skills.css";
import { EvervaultCard } from "./Hover";

// Import logos
import reactLogo from "./logos/react.png";
import jsLogo from "./logos/javascript.png";
import nextjsLogo from "./logos/next.png";
import tailwindLogo from "./logos/tailwind.png";
import tsLogo from "./logos/typescript.png";
import awsLogo from "./logos/aws.png";
import nodejsLogo from "./logos/node.png";
import pythonLogo from "./logos/python.png";
import mongodbLogo from "./logos/mongodb.png";
import golangLogo from "./logos/go.png";
import reduxLogo from "./logos/redux.png";
import gitLogo from "./logos/git.png";

function Skill() {
  const parentSkillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    if (parentSkillsRef.current) {
      observer.observe(parentSkillsRef.current);
    }

    return () => {
      if (parentSkillsRef.current) {
        observer.unobserve(parentSkillsRef.current);
      }
    };
  }, []);

  return (
    <div className="skill-div">
      <div className="border border-black/[0.2] dark:border-white/[0.2]  max-w-sm mx-auto  h-[8rem]">
        <EvervaultCard text="Skills" />
      </div>
      <div className="flip-card" ref={parentSkillsRef}>
        <div className="flip-card-side front">
          <div className="child">
            <h1 style={{ color: "#14E956", fontSize: "20px" }}>Front-End</h1>
          </div>
          <div className="child-skills" style={{ marginTop: "-60px" }}>
            <img src={reactLogo} alt="React Logo" className="skill-logo" />
            React Js
          </div>
          <div className="child-skills" style={{ marginTop: "-60px" }}>
            <img src={jsLogo} alt="JavaScript Logo" className="skill-logo" />
            JavaScript
          </div>
          <div className="child-skills" style={{ marginTop: "-60px" }}>
            <img src={nextjsLogo} alt="NextJs Logo" className="skill-logo" />
            NextJs
          </div>
          <div className="child-skills" style={{ marginTop: "130px" }}>
            <img
              src={tailwindLogo}
              alt="Tailwind CSS Logo"
              className="skill-logo"
            />
            Tailwind
          </div>
          <div className="child-skills" style={{ marginTop: "130px" }}>
            <img src={tsLogo} alt="TypeScript Logo" className="skill-logo" />
            TypeScript
          </div>
          <div className="child-skills" style={{ marginTop: "130px" }}>
            <img src={reduxLogo} alt="Redux Logo" className="skill-logo" />
            Redux
          </div>
        </div>
        <div className="flip-card-side back">
          <div className="child" style={{ marginLeft: "98%" }}>
            <h1 style={{ color: "#14E956", fontSize: "20px" }}>Back-End</h1>
          </div>
          <div className="child-skills" style={{ marginTop: "-60px" }}>
            <img src={awsLogo} alt="AWS Logo" className="skill-logo" />
            AWS
          </div>
          <div className="child-skills" style={{ marginTop: "-60px" }}>
            <img src={nodejsLogo} alt="Node Js Logo" className="skill-logo" />
            Node Js
          </div>
          <div className="child-skills" style={{ marginTop: "-60px" }}>
            <img src={pythonLogo} alt="Python Logo" className="skill-logo" />
            Python
          </div>
          <div className="child-skills" style={{ marginTop: "130px" }}>
            <img src={mongodbLogo} alt="MongoDb Logo" className="skill-logo" />
            MongoDb
          </div>
          <div className="child-skills" style={{ marginTop: "130px" }}>
            <img src={golangLogo} alt="Go Lang Logo" className="skill-logo" />
            Go Lang
          </div>
          <div className="child-skills" style={{ marginTop: "130px" }}>
            <img src={gitLogo} alt="Git" className="skill-logo" />
            Git
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
