import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-sticky p-2 justify-center bg-gradient-to-b from-[#ddf7ff] to-[#abedfe] text-gray-800 sticky bottom-0 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-lg font-semibold">
          &copy; This SARANG-CBT is the property of Bharath Electronics Limited,
          Hyderabad. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
