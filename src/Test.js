import React, { useState } from "react";
import "./Test.css";
import drawing from "./images/drawing.png";
import { EvervaultCard } from "./Hover";
import appointment from "./images/appointment.png";
import todo from "./images/todo.png";
import chatbot from "./images/chat-bot.png";
import left from "./images/left.png";
import right from "./images/right1.png";
import ai from "./images/ai.png";
import spacex from "./images/spaceX.png";

const images = [
  {
    path: ai,
    footerHeader: "AI Demo ",
    footerText:
      "A demo site for an AI company.Hands-on demos that illustrate the functionality of  AI models and about the company.",
  },
  {
    path: drawing,
    footerHeader: "Drawing Tool ",
    footerText:
      "It is a React-based application designed to provide users with an interactive canvas for creating and editing drawings.",
  },
  {
    path: todo,
    footerHeader: "To-do List ",
    footerText:
      "A simple Todo List web application built with React and Redux with a dark theme feature. ",
  },

  {
    path: chatbot,
    footerHeader: "Chat Bot Flow ",
    footerText:
      " It is a React-based application designed to create and manage conversational flows for chatbots.",
  },
  {
    path: spacex,
    footerHeader: "Space Program Demo ",
    footerText:
      "Space Program demo site, displaying the capsules data with filter and pagination",
  },
  {
    path: appointment,
    footerHeader: "Appointment Schelduler ",
    footerText:
      " It is designed to manage appointments efficiently. It allows users to create, edit,view schedules, and send reminders,",
  },
];

function Project() {
  <script src="https://kit.fontawesome.com/a076d05399.js"></script>;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const urls = [
    "https://marwin-one.vercel.app/",

    "https://main--drawing-tools.netlify.app/",
    "https://6661b87303bf0b0008a1ebca--toodoolistts.netlify.app/",

    "https://chatbot-flow-builder-git-main-shtewari23s-projects.vercel.app/",
    "https://shubham-tewari-frontend-developer.vercel.app/",
    "https://elated-edison-b7be1e.netlify.app/",

    // Add more URLs as needed
  ];
  const getUrlForCurrentIndex = () => {
    return urls[currentIndex];
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const handleVisit = () => {
    const url = getUrlForCurrentIndex(); // Implement this function to get the URL for the current index
    window.open(url, "_blank");
  };

  return (
    <div className="parent-div">
      <div className="evaluate-card">
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto relative h-[8rem]">
          <EvervaultCard text="Projects" />
        </div>
      </div>
      <div className="project-div">
        <div
          className="parentImage"
          style={{ backgroundImage: `url(${images[currentIndex].path})` }}
        />
        <div className="imageContainer">
          <img
            src={images[currentIndex].path}
            alt="current"
            className="displayedImage"
          />
          <div className="footer">
            <h3 className="projectHeading">
              {images[currentIndex].footerHeader}
            </h3>
            <p className="projectParagraph">
              {images[currentIndex].footerText}
            </p>
            <button className="visitButton" onClick={handleVisit}>
              Visit{" "}
            </button>
          </div>
        </div>
        <button className="navButton prevButton" onClick={handlePrev}>
          <img src={left} style={{ height: "80px" }} alt="Left"></img>
        </button>
        <button className="navButton nextButton" onClick={handleNext}>
          <img src={right} style={{ height: "80px" }} alt="right"></img>
        </button>
      </div>
    </div>
  );
}

export default Project;
