import { useState, useEffect } from "react";
import { flowchart } from "../../data/flowchartData";
import "../ImageviewerPage/ImageViewerPage.css";
import { useParams } from "react-router-dom";

import ImageLoader from "../UI/Loader/ImageLoader";
import BackButton from "../UI/BackButton";

const DiagramImage = () => {

  const { id } = useParams();
  const [contentItem, setContentItem] = useState(null);

  useEffect(() => {
    const item = flowchart.find((item) => item.id === parseInt(id));
    setContentItem(item);
  
  }, [id]);

  if (!contentItem) {
    return (
      <div>
        <ImageLoader />
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <div
        className={
          "h-[85vh] md-h:h-[82vh] lg-h:h-[85vh] xl-h:h-[85.2vh] xl-h2:h-[85.6vh] xl-h3:h-[87.7vh] 2xl-h:h-[88.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900"
        }
      >
           <div>
              <BackButton to={`/`} />
            </div>
        <div className="h-[87.7vh] overflow-auto border-y-4 border-x-4 border-white mx-36 cursor-text bg-[#FFF5EE]">
          <div className=" sticky top-0 bottom-0 bg-[#291f41] p-3 border-b-4 border-white">
            <div className="text-center  text-white border-x-[#e5bbff] p-1 ring-offset-4 border-y-[#e5bbff] bg-[#100824] border-4 shadow-[1px_1px_4px_4px_rgba(165,_39,_255,_0.48)] ">
              <div className="border-1 p-1 shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                <p className=" text-lg font-semibold xl:text-base lg:text-sm">
                  {contentItem.name}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#FFF5EE] pb-10">
            <div  className="border-4 border-black m-6 ">

            <img
              src={contentItem.src}
              alt={contentItem.name}
             
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagramImage;
