"use client";
import React, { useRef } from "react";
import { cn } from "./utils/cn";
import Navbar from "./Navbar";
import { Boxes } from "./Boxes";
import home from "./homepage.png";
import hand from "./hand-gif.gif";
import "./App.css"; // Make sure to import the CSS file
import Skill from "./Skills";
import Test from "./Test";
import Experience from "./Experience";
import Contact from "./Contact";
import Quote from "./Quote";

function App() {
  const homeRef = useRef(null); // Ref for the Home section
  const skillsRef = useRef(null); // Ref for the Skills section
  const projectsRef = useRef(null); // Ref for the Projects section
  const experienceRef = useRef(null); // Ref for the Experience section
  const contactRef = useRef(null); // R
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen h-full">
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />{" "}
      {/* Pass scrollToSection as prop */}
      <div ref={homeRef}>
        <div className="h-screen relative w-screen overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 md:px-8 z-30">
            <div className="text-center md:text-left text-white md:w-1/2 md:pr-4 mt-12 text-animate">
              <div className="heading flex items-center p-2 ">
                <img src={hand} className="w-10 h-10 mr-4" alt="Shubham" />
                <h1
                  className={cn(
                    "md:text-4xl text-xl mt-4 md:mt-0  heading-text"
                  )}
                >
                  Hi There, I am Shubham
                </h1>
              </div>
              <div className="paragraph">
                <p className="mt-4 text-neutral-300 text">
                  A Full Stack Developer. I like to code and develop websites.
                </p>
                <p className="mt-4 text-neutral-300 list">
                  {" "}
                  I am an experienced web developer with a strong focus on
                  solution-driven collaboration. Proficient in crafting
                  consumer-centric websites utilizing CSS, React, JavaScript,
                  NodeJS, AWS, TypeScript, MongoDb, Go, NextJs. I have
                  successfully created products catering to both desktop and
                  mobile users.
                </p>
              </div>
            </div>
            <div className="bg-transparent p-4 rounded-lg md:w-1/2 md:pl-4 image-animate">
              <img src={home} className="w-full h-auto" alt="Shubham" />
            </div>
          </div>
        </div>
      </div>
      <div ref={skillsRef}>
        {" "}
        <Skill />
      </div>
      <div ref={projectsRef}>
        <Test />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <Quote />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
