import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videoData } from "../../data/videoData";
import VideoLoader from "./Loader/VideoLoader";
import BackButton from "./BackButton";
const videoPath = `./Video/Intro.mp4 `;

function VideoPlayer() {
  const videoEl = useRef(null);
  const { id } = useParams();
  const [videoInfo, setVideoInfo] = useState();

  //Passing Videos id to state 
  useEffect(() => {
    if (id) {
      // Getting video id from videoData
      const foundVideo = videoData.find((item) => item.id.toString() === id);
      setVideoInfo(foundVideo);
    } else {
      setVideoInfo({ link: videoPath });
    }
  }, [id]);
  useEffect(() => {
    if (videoInfo && videoEl.current) {
      // videoEl.current.muted = true;
      videoEl.current.loop = true;
      videoEl.current.play();
    }
  }, [videoInfo]);

  // video Loader
  if (!videoInfo) {
    return (
      <div>
        <VideoLoader />
      </div>
    );
  }

  return (
    <div className="h-[100vh] md-h:h-[82vh] lg-h:h-[84vh] xl-h:h-[85.2vh] xl-h2:h-[85.6vh] xl-h3:h-[87.7vh] 2xl-h:h-[89.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] 2xl-h3:h-[89vh]  flex flex-col justify-center items-center   bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900 overflow-hidden">
      <div className="w-2/3">
        <div>
          {/* Navigating pages using Video id */}
          <BackButton to={id < 59 ? "/" : "/dfmtitle"} />
        </div>
        <div className="w-full ">
          <div className="bg-[#c3f2ff] text-center ">
            <div className="text-black underline text-base rounded-md font-bold py-2 ">
              {videoInfo.name}
            </div>
          </div>
        </div>
      </div>
      <video
        ref={videoEl}
        className="w-2/3 aspect-video"
        controls
        controlsList="nodownload"
      >
        <source src={videoInfo.link} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
