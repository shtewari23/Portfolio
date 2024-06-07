import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";
import { EvervaultCard } from "./Hover";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "Aye Solutions",
    position: "Software Engineer",
    description:
      "Lead  and Developed Robust PDF Handling Solutions: Implemented solutions in Node.js for handling PDF file uploads, storage,retrieval, and manipulation.",
    startDate: "Oct 2023",
    endDate: "Apr 2024",
  },
  {
    company: "Borderfree Technologies",
    position: "Full Stack Developer",
    description:
      "Created comprehensive e-commerce functionalities enabling users to list, sell, and purchase products or services during live streams.",
    startDate: "Dec 2021",
    endDate: "Aug 2023",
  },
  {
    company: "Dian Apps",
    position: "Junior Web Developer",
    description:
      " Provided front-end website development using ReactJS, JavaScript, and CSS",
    startDate: "Jan 2021",
    endDate: "Nov 2021",
  },
];

const ExperienceTimeline = () => {
  return (
    <div
      style={{
        height: "auto",
        backgroundColor: "#10182b",
        borderBottom: "1px solid white",
      }}
    >
      <div className="border border-black/[0.2] dark:border-white/[0.2]  max-w-sm mx-auto  h-[8rem]">
        <EvervaultCard text="Experience" />
      </div>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#021709", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  #f0f0f0" }}
            date={`${experience.startDate} - ${experience.endDate}`}
            iconStyle={{ background: "#4CAF50", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              {experience.position}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.company}
            </h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceTimeline;
