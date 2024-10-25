// components/Heading.js
import React from "react";
import "./title.css";

const Title = ({ text, className = "" }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="custom__title inline-flex al">
        <h2
          className={`text-6xl font-tangerine font-bold text-customMorado text-center`}
        >
          {text}
        </h2>
      </div>
    </div>
  );
};

export default Title;
