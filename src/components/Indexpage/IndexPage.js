import React from "react";
import IndexButton from "./IndexButton";

const IndexPage = () => {
  return (
    <div className="overflow-hidden h-[80vh]">
      <div className="flex p-4 text-base font-bold text-white w-full bg-[#0070c0] text-center items-center justify-center overflow-hidden">
        TABLE OF CONTENT
      </div>

      <div className="flex items-center justify-center bg-[#4f81bd] h-[65vh]  mx-10 overflow-hidden">
        <div className="bg-white ">
          <div className="flex border-2 border-black gap-24 px-12">
            <IndexButton text="About Me" />
            <IndexButton text="Vision & Mission" />
            <IndexButton text="Personal Skills" />
          </div>

          <div className="flex border-t-0 border-2 border-black  gap-24  px-12">
            <IndexButton text="Work Experience" />
            <IndexButton text="Project Portfolio" />
            <IndexButton text="Contact" />
          </div>
        </div>
      </div>
      <div className="p-4 w-full bg-[#0070c0] ">.</div>
    </div>
  );
};

export default IndexPage;
