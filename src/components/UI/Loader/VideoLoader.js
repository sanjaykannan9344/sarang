import React from "react";

const VideoLoader = () => {
  return (
    <div className="ml-20 flex h-[82vh] md-h:h-[82vh]  lg-h:h-[84vh] xl-h:h-[85.2vh] xl-h2:h-[85.6vh] xl-h3:h-[87.7vh] 2xl-h:h-[88.5vh] 2xl-h1:h-[87vh] 2xl-h3:h-[89vh] 2xl-h2:h-[90.6vh] my-1 justify-center items-center       ">
      <div
        role="status"
        className=" bg-gray-300 rounded-lg h-[70vh] w-2/3  animate-pulse dark:bg-gray-700 flex  justify-center items-center"
      >
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default VideoLoader;
