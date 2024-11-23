// src/App.js
import React, { useState, useEffect } from "react";
import "../Hotspot1/Hotspot.css";
import Hotspot from "../Hotspot1/Hotspot";
import BackButton from "./BackButton";

const Hotspot1 = () => {
  const [hotspots, setHotspots] = useState([
    {
      id: 1,
      top: "20%",
      left: "10%",
      content: {
        title: "Lorem ipsum",
        text: "diam consetetur takimata velit magna magna",
        buttonText: "Button",
      },
      isOpen: false,
    },
    {
      id: 2,
      top: "5%",
      right: "10%",
      content: {
        title: "Eros uns eos sind rebum",
        text: "Clita sanctus eirmod eros aliquip. Clita Lorem dolores diam",
        buttonText: "velit dolor",
      },
      isOpen: false,
    },
    {
      id: 3,
      bottom: "20%",
      left: "60%",
      content: {
        title: "Eros uns eos sind rebum",
        text: "Clita sanctus eirmod eros aliquip. Clita Lorem dolores diam",
        buttonText: "Button",
      },
      isOpen: false,
    },
    {
      id: 4,
      bottom: "10%",
      right: "10%",
      content: {
        title: "Eros uns eos sind rebum",
        text: "Clita sanctus eirmod eros aliquip. Clita Lorem dolores diam",
        buttonText: "Button",
      },
      isOpen: false,
    },
  ]);

  const toggleHotspot = (id) => {
    setHotspots((prevHotspots) =>
      prevHotspots.map((hotspot) =>
        hotspot.id === id ? { ...hotspot, isOpen: !hotspot.isOpen } : hotspot
      )
    );
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] md-h:h-[82vh] lg-h:h-[82.7vh] xl-h:h-[83.7vh] xl-h2:h-[84.5vh] xl-h3:h-[87.7vh] 2xl-h:h-[89.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] 2xl-h3:h-[89vh]  bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900 overflow-hidden ">
        <div>
          <BackButton to={"../"} />
        </div>
        <div className="container">
          {hotspots.map((hotspot) => (
            <Hotspot
              key={hotspot.id}
              id={hotspot.id}
              position={hotspot}
              toggleHotspot={toggleHotspot}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hotspot1;
