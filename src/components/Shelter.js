import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "./UI/Breadcrumbs/Breadcrumbs";
import { content } from "../data/contenttitle";
import BackButton from "./UI/BackButton";



// Shelter Electronics Breadcrumbs data

const breadcrumbs = [
  { text: "ASMS Vehicle", url: "/asms-vehicle" },
  { text: "About LRU's", url: "/entity-introduction" },
  { text: "Shelter Electronics" },
];
const Shelter = () => {
  const { id } = useParams();

  const selectedContent = content.find((item) => item.id.toString() === id);

  return (
    <div className="h-[100vh] md-h:h-[83vh]   lg-h:h-[84vh] xl-h:h-[85.2vh] xl-h2:h-[86vh] xl-h3:h-[87.7vh] 2xl-h:h-[89.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] 2xl-h3:h-[89vh]  bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900 overflow-hidden ">
      {/* Breadcrums */}
      <div className="sticky flex items-center justify-center border-white border-x-4 border-t-4 left-20  lg:mx-20 xl:mx-36 2xl:mx-60   py-3  z-10 ">
        <Breadcrumbs breadcrumbs={ breadcrumbs} />
      </div>
      {/* Backbutton */}
      <div className="px-5 flex items-center justify-center ">
        <div>
          <BackButton to={"../"} />
        </div>
      </div>
      <div className=" h-[72vh] md-h:h-[72vh] lg-h:h-[75.2vh] xl-h:h-[77vh] xl-h2:h-[77.5vh] xl-h3:h-[80.7vh] 2xl-h:h-[80.5vh] 2xl-h1:h-[80.1vh] 2xl-h2:h-[86vh] 2xl-h3:h-[83.2vh] flex border-white border-4  lg:mx-20 xl:mx-36 2xl:mx-60  overflow-auto ">
        <div className="w-full  lg:px-14 xl:px-14 2xl:px-44   flex-col overflow-auto ">
          <div className="w-full  px-5 ">
            {selectedContent &&
              selectedContent.subtitle.map((item, id) => (
                <Link
                  key={id}
                  to={`/imageViewer/${item.id}`}
                  className="no-underline "
                >
                  <div className="">
                    <div className="flex flex-col  border-x-[#e5bbff]  border-y-[#e5bbff] bg-black border-4 shadow-[0px_0px_4px_5px_rgba(165,_39,_255,_0.48)]  mb-1">
                      <div className=" xl:flex xl:text-center  m-2 hover:bg-white hover:bg-opacity-75  shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                        <div className="flex ">
                          <img
                            src="./Image/Arrow-button.png"
                            alt="arrow"
                            className="h-[33px] w-[75px] "
                          />

                          <p className=" text-white text-base xl:mt-1.5 lg:mt-1.5  2xl:mt-1 ">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shelter;
