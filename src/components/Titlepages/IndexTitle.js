import React from "react";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import { content } from "../../data/contenttitle";
import BackButton from "../UI/BackButton";

// Breadcrumbs Data
const breadcrumbsData = [
  { text: "Sarang ESM System", url: "/asms-vehicle" },
  { text: "Introduction", url: "/entity-introduction" },
  { text: "System Hardware" },
];

const indexTitle = () => {
  return (
    <div className="h-[100vh] md-h:h-[83vh]   lg-h:h-[84vh] xl-h:h-[85.2vh] xl-h2:h-[86vh] xl-h3:h-[87.7vh] 2xl-h:h-[89.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] 2xl-h3:h-[89vh] bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900 overflow-hidden ">
      <div className="flex justify-center border-x-4 border-t-4 border-white lg:mx-20 xl:mx-36 2xl:mx-80 py-3">
        <Breadcrumbs breadcrumbs={breadcrumbsData} />
      </div>
      <div className="px-5 flex items-center justify-center ">
        <div>
          <BackButton to={"../"} />
        </div>
      </div>

      <div>
        <div className=" h-[72vh] md-h:h-[72vh]  lg-h:h-[75.2vh] xl-h:h-[77vh] xl-h2:h-[77.5vh] xl-h3:h-[80vh]  2xl-h:h-[80.5vh] 2xl-h1:h-[80.1vh] 2xl-h2:h-[86vh] 2xl-h3:h-[83.2vh]  flex flex-col xl:mx-36 2xl:mx-80 lg:mx-20 border-4 border-white p-6">
          <div className="flex text-center justify-center flex-col  lg:mx-5 xl:mx-12 2xl:mx-10 ">
            {content.map((data, id) => (
              <div
                className="relative mx-5  border-x-[#e5bbff]  border-y-[#e5bbff] bg-black border-4 shadow-[0px_0px_5px_6px_rgba(165,_39,_255,_0.48)]  mb-5  hover:-translate-y-1 hover:scale-110 duration-300"
                key={id}
              >
                <Link
                  to={`/contenttitle/${data.id}`}
                  className=" flex text-center justify-center transition ease-in-out delay-150 -translate-y-0 m-2  shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]"
                >
                  <div className="text-center ">
                    <div className="absolute  left-1 -mt-1">
                      <img
                        src="./Image/Arrow-button.png"
                        alt="arrow"
                        className="h-[33px] w-[75px] "
                      />
                    </div>
                  </div>
                  <div className="">
                    <p className="font-semibold text-white hover:text-gray-400 ">
                      {data.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default indexTitle;
