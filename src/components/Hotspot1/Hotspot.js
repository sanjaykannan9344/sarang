// src/Hotspot.js
import React from "react";

const Hotspot = ({ id, position, toggleHotspot }) => {
  const { top, bottom, left, right, content, isOpen } = position;

  const styles = {
    top,
    bottom,
    left,
    right,
  };

  return (
    <div
      className={`hotspot ${isOpen ? "open" : ""}`}
      style={styles}
      onClick={() => toggleHotspot(id)}
    >
      <div className="icon">{id}</div>
      {isOpen && (
        <div className="content">
          <h4>{content.title}</h4>
          <p>{content.text}</p>
          <a className="btn" href="/">
            {content.buttonText}
          </a>
        </div>
      )}
    </div>
  );
};

export default Hotspot;
