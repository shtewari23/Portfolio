import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
const ContactFooter = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-item">
        <a
          href="tel:+1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaPhoneAlt className="contact-icon" />
          <span>+91 7307728791</span>
        </a>
      </div>
      <div className="contact-item">
        <a
          href="https://www.linkedin.com/in/shubham-tewari-678818123"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>
      </div>
      <div className="contact-item">
        <a
          href="mailto:shtewari23@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaEnvelope className="contact-icon" />
          <span>shtewari23@gmail.com</span>
        </a>
      </div>
      <div className="contact-item">
        <a
          href="https://github.com/shtewari23"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default ContactFooter;
