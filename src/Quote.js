import React from "react";
import "./Quote.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
const QuoteComponent = () => {
  return (
    <div
      style={{
        height: "80vh",
        backgroundColor: "#10182b",
        position: "relative",
        display: " flex",
      }}
    >
      <div className="quote-container">
        <p className="quote">
          <RiDoubleQuotesL
            style={{
              display: "inline-block",
              position: "absolute",
              left: "46px",
            }}
          />
          <span style={{ marginLeft: "30px" }}>
            Be humble, be teachable, and always keep learning.
          </span>
          <RiDoubleQuotesR
            style={{
              display: "inline-block",
              position: "absolute",
              left: "59%",
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default QuoteComponent;
