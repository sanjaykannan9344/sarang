import React from "react";
import { Link } from "react-router-dom";

// Navigation Links geting By Props
const BackButton = ({ to }) => {
  return (
    <div>
      <div className="transform -rotate-90 fixed -left-11 top-[45%] ">
        <button className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <Link to={to}>
            <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>{" "}
            Back to Menu
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BackButton;
