import React, { useState } from "react";
import Dropdown from "./Dropdown";

const SideNav = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded((isSidebarExpanded) => !isSidebarExpanded);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-blue-600">
      {/* Sidebar */}
      {isSidebarExpanded && (
        <div
          className={`bg-gray-800 flex flex-col w-96 transition-all duration-300 ease-in-out ${
            isSidebarExpanded ? "" : "w-16"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
            <div className="text-white text-lg font-semibold">
              <a href="/" className="no-underline text-white">
                Logo{" "}
              </a>
            </div>
            <button
              onClick={toggleSidebar}
              className="text-gray-400 focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isSidebarExpanded ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Sidebar Content */}

          <nav className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-6 no-underline ">
              <Dropdown />
            </div>
          </nav>
        </div>
      )}
      <button
        onClick={toggleSidebar}
        className="text-gray-400 focus:outline-none border-none "
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isSidebarExpanded ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {/* Main Content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* <div className="relative z-10 flex-shrink-0 flex h-16 bg-gray-800 items-center px-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-400 focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSidebarExpanded ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div> */}
        <div className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {/* Your main content here */}
        </div>
      </div>
    </div>
  );
};
export default SideNav;
