import BackButton from "./BackButton";
import { Link } from "react-router-dom";
export default function Hotspot() {
  return (
    <div className="h-[100vh] md-h:h-[83vh] lg-h:h-[84vh] xl-h:h-[85.2vh] xl-h2:h-[86vh] xl-h3:h-[87.7vh] 2xl-h:h-[89.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] 2xl-h3:h-[89vh] bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900 overflow-hidden ">
      <div>
        <BackButton to={"/"} />
      </div>
      <div className="relative mx-10  border-x-[#e5bbff]  border-y-[#e5bbff] bg-black border-4 shadow-[0px_0px_5px_6px_rgba(165,_39,_255,_0.48)]  mt-10  hover:-translate-y-1 hover:scale-90 duration-100  ">
        <Link
          to="/GpsAntenna"
          className=" flex text-center justify-center transition ease-in-out delay-150 -translate-y-0 m-2  shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]"
        >
          <div>
            <img
              src="./Image/Arrow-button.png"
              alt="arrow"
              class="h-[33px] w-[75px]"
            />
          </div>
          <div>
            <p className="font-semibold text-white hover:text-gray-400 p-1 pr-20 ">
              GPS Antenna
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
