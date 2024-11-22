import { Link } from "react-router-dom";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import BackButton from "../UI/BackButton";

// Breadcrumbs data
const breadcrumbs = [
  { text: "ASMS Vehicle", url: "/asms-vehicle" },
  { text: "Operating Procedure", url: "/Operating_Procedure" },
  { text: "DF & Monitoring Application" },
];
const DFMTitlePage = () => {
  return (
    <div className="h-[100vh] md-h:h-[83vh]   lg-h:h-[84vh] xl-h:h-[85.2vh] xl-h2:h-[86vh] xl-h3:h-[87.7vh] 2xl-h:h-[89.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] 2xl-h3:h-[89vh]  bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900 overflow-hidden ">
      <div className="sticky flex items-center justify-center border-white border-x-4 border-t-4 left-20  lg:mx-20 xl:mx-36 2xl:mx-60   py-3  z-10 ">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-5 flex items-center justify-center ">
        <div>
          <BackButton to="/" />
        </div>
      </div>

      <div className=" h-[72vh] md-h:h-[72vh] lg-h:h-[75.2vh] xl-h:h-[77vh] xl-h2:h-[77.5vh] xl-h3:h-[80.7vh] 2xl-h:h-[80.5vh] 2xl-h1:h-[80.1vh] 2xl-h2:h-[86vh] 2xl-h3:h-[83.2vh] flex border-white border-4  lg:mx-20 xl:mx-36 2xl:mx-60  overflow-auto ">
       

        <div className="w-full  lg:px-14 xl:px-14 2xl:px-44   flex-col overflow-auto ">
          <div className="w-full  px-5 ">
            <Link  className="no-underline cursor-default">
              <div className="">
                <div className="flex flex-col  border-x-[#e5bbff]  border-y-[#e5bbff] bg-black border-4 shadow-[0px_0px_4px_5px_rgba(165,_39,_255,_0.48)]  mb-1">
                  <div className=" xl:flex xl:text-center  m-2   shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                    <div className="flex ">
                      <img
                        src="./Image/Arrow-button.png"
                        alt="arrow"
                        className="h-[33px] w-[75px] "
                      />
                      <p className=" text-white text-base xl:my-1.5 lg:my-1.5  2xl:my-1 ">
                        DF & Monitoring Application
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={`/video/${60}`} className="no-underline ">
              <div className="">
                <div className="flex flex-col  border-x-[#e5bbff]  border-y-[#e5bbff] bg-black border-4 shadow-[0px_0px_4px_5px_rgba(165,_39,_255,_0.48)]  mb-1">
                  <div className=" xl:flex xl:text-center  m-2 hover:bg-white hover:bg-opacity-75  shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                    <div className="flex pl-20  py-1">
                      <p className=" text-white text-base xl:my-1.5 lg:my-1.5  2xl:my-1 ">
                        <span className="font-extrabold mr-3">(a)</span> Ramon
                        Basics MCP Job Creation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={`/video/${61}`} className="no-underline ">
              <div className="">
                <div className="flex flex-col  border-x-[#e5bbff]  border-y-[#e5bbff] bg-black border-4 shadow-[0px_0px_4px_5px_rgba(165,_39,_255,_0.48)]  mb-1">
                  <div className=" xl:flex xl:text-center  m-2 hover:bg-white hover:bg-opacity-75  shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                    <div className="flex pl-20  py-1">
                      <p className=" text-white text-base xl:my-1.5 lg:my-1.5  2xl:my-1 ">
                        <span className="font-extrabold mr-3">(b)</span> SCP Job
                        Creation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={`/video/${68}`} className="no-underline ">
              <div className="">
                <div className="flex flex-col  border-x-[#e5bbff]  border-y-[#e5bbff] bg-black border-4 shadow-[0px_0px_4px_5px_rgba(165,_39,_255,_0.48)]  mb-1">
                  <div className=" xl:flex xl:text-center  m-2 hover:bg-white hover:bg-opacity-75  shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                    <div className="flex pl-20  py-1 ">
                      <p className=" text-white text-base xl:my-1.5 lg:my-1.5  2xl:my-1 ">
                        <span className="font-extrabold mr-3">(c)</span> IQ
                        Recordings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="no-underline cursor-default mb-2">
              <div className="">
                <div className="flex flex-col  border-x-[#e5bbff]  border-y-[#e5bbff] bg-black border-4 shadow-[0px_0px_4px_5px_rgba(165,_39,_255,_0.48)]  mb-1">
                  <div className=" xl:flex m-2 shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                    <div className="  w-full py-2">
                      <div className=" ">
                        <div className="  ml-20">
                          <p className=" text-white text-base xl:mt-1.5 lg:my-1.5   ">
                            <span className="font-extrabold mr-3">(d)</span>
                            Frequency Hopping
                          </p>
                        </div>
                        <div className=" border-b-[#e5bbff]  border-b-2 shadow-[_4px_rgba(165,_39,_255,_0.48)]"></div>

                        <div className="pl-36 my-2 p-1 hover:bg-white hover:bg-opacity-75 ">
                          <Link to={`/video/${62}`} className=" text-white text-base xl:mt-1.5 lg:mt-1.5  2xl:mt-1 ">
                            <span className="font-extrabold mr-3">(i)</span>
                            Frequency Hopping-1
                          </Link>
                        </div>
                        <div className=" border-b-[#e5bbff]  border-b-2 shadow-[_4px_rgba(165,_39,_255,_0.48)]"></div>

                        <div className="  pl-36 my-2 p-1 hover:bg-white hover:bg-opacity-75 ">
                          <Link  to={`/video/${63}`} className=" text-white text-base xl:mt-1.5 lg:mt-1.5  2xl:mt-1  ">
                            <span className="font-extrabold mr-3">(ii)</span>
                            Frequency Hopping-2
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="no-underline cursor-default">
              <div className="">
                <div className="flex flex-col  border-x-[#e5bbff]  border-y-[#e5bbff] bg-black border-4 shadow-[0px_0px_4px_5px_rgba(165,_39,_255,_0.48)]  mb-1">
                  <div className=" xl:flex m-2 shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                    <div className="  w-full py-2">
                      <div className=" ">
                        <div className="  ml-20">
                          <p className=" text-white text-base xl:mt-1.5 lg:my-1.5   ">
                            <span className="font-extrabold mr-3">(e) </span>
                            Replay Job with MCP & SCP
                          </p>
                        </div>
                        <div className=" border-b-[#e5bbff]  border-b-2 shadow-[_4px_rgba(165,_39,_255,_0.48)]"></div>

                        <div className=" pl-36 my-2 p-1 hover:bg-white hover:bg-opacity-75">
                          <Link to={`/video/${64}`} className=" text-white text-base xl:mt-1.5 lg:mt-1.5  2xl:mt-1 ">
                            <span className="font-extrabold mr-3">(i)</span>
                            DDF550 & Replay
                          </Link>
                        </div>
                        <div className=" border-b-[#e5bbff]  border-b-2 shadow-[_4px_rgba(165,_39,_255,_0.48)]"></div>

                        <div className="  pl-36 my-2 p-1 hover:bg-white hover:bg-opacity-75  ">
                          <Link to={`/video/${65}`} className=" text-white text-base xl:mt-1.5 lg:mt-1.5  2xl:mt-1  ">
                            <span className="font-extrabold mr-3">(ii)</span>
                            Replay Job with MCP & SCP
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to={`/video/${66}`} className="no-underline mb-2">
              <div className="">
                <div className="flex flex-col  border-x-[#e5bbff]  border-y-[#e5bbff] bg-black border-4 shadow-[0px_0px_4px_5px_rgba(165,_39,_255,_0.48)]  mb-1">
                  <div className=" xl:flex xl:text-center  m-2 hover:bg-white hover:bg-opacity-75  shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                    <div className="flex pl-20  py-1">
                      <p className=" text-white text-base xl:mt-1.5 lg:mt-1.5  2xl:mt-1 ">
                        <span className="font-extrabold  mr-3">(f)</span> Job
                        Editor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={`/video/${67}`} className="no-underline ">
              <div className="">
                <div className="flex flex-col  border-x-[#e5bbff]  border-y-[#e5bbff] bg-black border-4 shadow-[0px_0px_4px_5px_rgba(165,_39,_255,_0.48)]  mb-1">
                  <div className=" xl:flex xl:text-center  m-2 hover:bg-white hover:bg-opacity-75  shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                    <div className="flex pl-20  py-1">
                      <p className=" text-white text-base xl:mt-1.5 lg:mt-1.5  2xl:mt-1 ">
                        <span className="font-extrabold  mr-3">(g)</span>{" "}
                        Propagation Calculation Tool
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to={`/video/${69}`} className="no-underline ">
              <div className="">
                <div className="flex flex-col  border-x-[#e5bbff]  border-y-[#e5bbff] bg-black border-4 shadow-[0px_0px_4px_5px_rgba(165,_39,_255,_0.48)]  mb-1">
                  <div className=" xl:flex xl:text-center  m-2 hover:bg-white hover:bg-opacity-75  shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                    <div className="flex pl-20  py-1">
                      <p className=" text-white text-base xl:mt-1.5 lg:mt-1.5  2xl:mt-1 ">
                        <span className="font-extrabold  mr-3">(h)</span>{" "}
                         Location Fixing 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default DFMTitlePage;
