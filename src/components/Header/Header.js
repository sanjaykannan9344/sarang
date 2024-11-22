import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const closeWindow = (e) => {
    if (window) {
      const { ipcRenderer } = window.require("electron");
      ipcRenderer.send("close", []);
    }
  };
  const resizeWindow = (e) => {
    if (window) {
      const { ipcRenderer } = window.require("electron");
      ipcRenderer.send("minimize", []);
    }
  };
  return (
    <>
      <div className="mx-auto flex items-center justify-between grow sticky top-0 z-40 ">
        <div
          className="z-30 relative h-20 w-full bg-cover"
          style={{
            backgroundImage: `url(./Video/Header.gif)`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <header className="flex items-center h-20  justify-between  customheader">
            {/* Logo section (20%) */}
            <div className="w-72 flex items-center ">
              <img
                src="./Image/Bharat-Logo.png"
                alt="CBT Logo"
                className="w-72 h-52 "
              />
            </div>

            <div className="w-54 flex items-center justify-center ">
              <img
                src="./Image/indianflag.gif"
                alt="CBT Logo"
                className="w-28 h-16 "
              />
            </div>

            {/* Title and tagline section (60%) */}
            <div className="flex flex-col items-center text-center content-center text-gray-200 ">
              <div className="border border-sky-500 text-center  my-1 text-white bg-[#002c66]">
                <span className="m-1 lg:text-base lg:font-bold xl:text-2xl 2xl:text-2xl  font-bold">
                  SARANG ESM SYSTEM
                </span>
              </div>
              <div className="border-b border-l  border-r -mt-1  border-sky-500 text-white bg-[#002c66]">
                <span className="m-1 text-lg font-medium ">
                  Computer Based Training
                </span>
              </div>
            </div>

            <div className="w-54 flex items-center  justify-center">
              <img
                src="./Image/Indian_Navy_Insignia.png"
                alt="Navy Logo"
                className="w-18 h-[4.5rem] "
              />
            </div>

            {/* Home link section (20%) */}
            <div className="flex items-center w-auto justify-evenly gap-1 mr-5">
              <div className="tooltip transition ease-in-out delay-75 hover:border-black rounded-full hover:-translate-y-1 hover:scale-110">
                <Link to="../">
                  <img
                    className="h-[52px] w-13"
                    src="./Image/Home.png"
                    alt="home-btn"
                  />
                </Link>
                <span className="tooltiptext"> Home</span>
              </div>
              <div
                className="tooltip transition ease-in-out delay-75 hover:border-black rounded-full hover:-translate-y-1 hover:scale-110"
                // onClick={() => triggerThis()}
              >
                <img
                  className="h-14 w-14"
                  src="./Image/Minimize.png"
                  alt="minimize-btn"
                  onClick={() => {
                    resizeWindow();
                  }}
                />
                <span className="tooltiptext">Minimize</span>
              </div>
              <div
                className="tooltip transition ease-in-out delay-75 hover:border-black rounded-full hover:-translate-y-1 hover:scale-110"
                // onClick={closed}
              >
                <img
                  className="h-11 w-12.5 "
                  src="./Image/X.png"
                  alt="close-btn"
                  onClick={() => {
                    closeWindow();
                  }}
                />
                <span className="tooltiptext">Close</span>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
