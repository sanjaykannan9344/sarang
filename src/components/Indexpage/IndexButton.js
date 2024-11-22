import React from "react";
import "./IndexButton.css";
import { Link } from "react-router-dom";

const IndexButton = ({ text }) => {
  return (
    <div>
      <div className="custom-shape">
        <button className="border-span "></button>
        <Link to="/" className="text mx-3">
          {text}
        </Link>
      </div>
    </div>
  );
};

export default IndexButton;
