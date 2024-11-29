import { useState } from "react";
import BackButton from "./BackButton";
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";
import texts from "../../data/hotspotclick";

export default function GpsAntenna() {
  const [selectedText, setSelectedText] = useState(null);

  const toggleHotspot = (id) => {
    if (selectedText === id) {
      setSelectedText(null);
    } else {
      setSelectedText(id);
    }
  };

  const getDescription = (id) => {
    const text = texts.find((text) => text.id === id);
    return text ? text.description : "Description not available.";
  };
  const getStyle = (id) => {
    const text = texts.find((text) => text.id === id);
    return text ? text.style : "bg-black text-white p-6 rounded-lg shadow-xl";
  };

  return (
    <div className="h-[100vh] md-h:h-[83vh] lg-h:h-[84vh] xl-h:h-[85.2vh] xl-h2:h-[86vh] xl-h3:h-[87.7vh] 2xl-h:h-[89.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] 2xl-h3:h-[89vh] bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900 overflow-hidden ">
      <div>
        <BackButton to={"/Hotspot"} />
      </div>
      <div>
        <img
          src="/Image/locatation_of_GPS_Antenna.png"
          className=" mx-auto my-14 block max-w-4xl h-auto object-contain"
        />
        <div className="">
          <Bs1CircleFill
            className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            size={30}
            onClick={() => toggleHotspot(1)}
          />
          <Bs2CircleFill
            className="text-white absolute top-1/3 left-1/3 sm:top-1/3 sm:left-1/3 md:top-1/3 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            size={30}
            onClick={() => toggleHotspot(2)}
          />
          <Bs3CircleFill
            className="text-white mt-16 mx-96 cursor-pointer"
            size={30}
            onClick={() => toggleHotspot(3)}
          />
        </div>
      </div>

      {selectedText && (
        <div
          className={`${getStyle(
            selectedText
          )} absolute bottom-10 left-1/2 transform -translate-x-1/2`}
        >
          <p className="text-white text- sm:text-xl font-medium leading-relaxed">
            {getDescription(selectedText)}
          </p>
        </div>
      )}
    </div>
  );
}
