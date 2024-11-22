import BackButton from "./BackButton";
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";
import { texts } from "../../../src/data/hotspotclick";
import { useState } from "react";
export default function GpsAntenna() {
  const [clickIcons, setClickIcons] = useState(null);

  const handleIconClick = (index) => {
    setClickIcons(index);
  };
  const displayText =
    clickIcons !== null && clickIcons >= 0 && clickIcons < texts.length
      ? texts[clickIcons]
      : null;
  return (
    <div className="h-[100vh] md-h:h-[83vh] lg-h:h-[84vh] xl-h:h-[85.2vh] xl-h2:h-[86vh] xl-h3:h-[87.7vh] 2xl-h:h-[89.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] 2xl-h3:h-[89vh] bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900 overflow-hidden ">
      <div>
        <BackButton to={"/Hotspot"} />
      </div>
      <div>
        <img
          src="/Image/locatation_of_GPS_Antenna.png"
          className="mt-10 p-10"
        />
        <Bs1CircleFill
          className="text-white -mt-44 mx-96 "
          size={30}
          onClick={() => handleIconClick(0)}
        ></Bs1CircleFill>
        <Bs2CircleFill
          className="text-white  mx-96 "
          size={30}
          onClick={() => handleIconClick(1)}
        ></Bs2CircleFill>
        <Bs3CircleFill
          className="text-white  mx-96 "
          size={30}
          onClick={() => handleIconClick(2)}
        ></Bs3CircleFill>
      </div>
      {clickIcons !== null && (
        <div className="text-white text-center mt-4 px-6">
          <p>{displayText}</p>
        </div>
      )}
    </div>
  );
}
