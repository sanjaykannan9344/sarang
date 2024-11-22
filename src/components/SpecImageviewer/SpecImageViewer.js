import { useState, useEffect } from "react";
import ImageViewer from "../UI/ImageViewer";
import { subContent } from "../../data/contenttitle";
import "../ImageviewerPage/ImageViewerPage.css";
import { useParams } from "react-router-dom";
import Table from "../UI/Table";
import BackButton from "../UI/BackButton";
import ImageLoader from "../UI/Loader/ImageLoader";

const SpecImageViewer = () => {
  const [image, setImage] = useState();
  const { id } = useParams();
  const [contentItem, setContentItem] = useState(null);

  useEffect(() => {
    const item = subContent.find((item) => item.id === parseInt(id));
    setContentItem(item);
    if (item && item.image && item.image.length > 0) {
      setImage(item.image[0]);
    }
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
          !image
            ? "h-[82vh] md-h:h-[82vh] lg-h:h-[84vh] xl-h:h-[85.2vh] xl-h2:h-[85.6vh] xl-h3:h-[87.7vh] 2xl-h:h-[88.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900"
            : "h-[82vh] md-h:h-[82vh] lg-h:h-[84vh] xl-h:h-[85.2vh] xl-h2:h-[85.6vh] xl-h3:h-[87.7vh] 2xl-h:h-[88.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] overflow-hidden grid grid-cols-2  bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900"
        }
      >
        <div className="grid grid-col-2  place-items-center ">
          <div>
            <div>
              <BackButton to={`/spectitle`} />
            </div>

            {/* main Image */}
            <div className="lg:pl-5 xl:pl-8 2xl:pl-10 lg:-mt-5">
              {image && (
                <div className="my-5 bg-black border-x-[#e5bbff] p-1.5 border-y-[#e5bbff] border-4 shadow-[0px_0px_5px_6px_rgba(165,_39,_255,_0.48)]">
                  <div className=" border-1 p-2   shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)] ">
                    <div className="p-3 corner-border flex justify-center text-center ">
                      <div className={`p-1 bg-black" }`}>
                        {image && (
                          <ImageViewer src={image.url} alt={image.name} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sub Images */}
          <div className="lg:-mt-12 ">
            <div className="grid grid-flow-col md:ml-10  gap-3 mx-6 md:mb-8">
              {contentItem.image &&
                contentItem.image.map((img) => {
                  const isSelected = image && img.id === image.id;
                  return (
                    <div
                      className="cursor-pointer lg:max-h-[60px] lg:max-w-[90px] xl:max-h-[100px] xl:max-w-[120px] 2xl:max-h-[100px] 2xl:max-w-[140px] 3xl:max-h-[150px] 3xl:max-w-[200px]"
                      key={img.id}
                    >
                      <div className="border-x-[#e5bbff] p-1 ring-offset-4 border-y-[#e5bbff] bg-[#100824] border-4 shadow-[1px_1px_4px_4px_rgba(165,_39,_255,_0.48)]">
                        <div className="border-1 p-1 shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                          <div className="img-corner-border">
                            <img
                              className={`p-1 hover:opacity-50 hover:bg-[#b4effe] hover:border-[#b4effe]  ${
                                isSelected
                                  ? "border-[#b4effe] bg-[#b4effe]"
                                  : "border-[#002c66] bg-[#002c66]"
                              }`}
                              src={img.url}
                              alt={img.name}
                              onClick={() => setImage(img)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* Content */}
        <div
          className={
            !image
              ? "h-[87.7vh] overflow-auto border-y-4 border-x-4 border-white mx-36 cursor-text"
              : "h-[87.7vh] overflow-auto border-y-4 border-x-4 border-white cursor-text"
          }
        >
          <div className=" sticky top-0 bottom-0 bg-[#291f41] p-3 border-b-4 border-white">
            <div className="text-center  text-white border-x-[#e5bbff] p-1 ring-offset-4 border-y-[#e5bbff] bg-[#100824] border-4 shadow-[1px_1px_4px_4px_rgba(165,_39,_255,_0.48)] ">
              <div className="border-1 p-1 shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                <p className=" text-lg font-semibold xl:text-base lg:text-sm">
                  {contentItem.name}
                </p>
              </div>
            </div>
          </div>
          <div className=" text-black bg-[#FFF5EE] h-full px-3 text-justify  overflow-auto pb-10 ">
            <ul className="list-none">
              <li className=" text-lg pt-3">{contentItem.content}</li>
              {/* Table Title */}
              {contentItem.tabletitle && (
                <li className=" text-lg pt-3 font-bold">
                  {contentItem.tabletitle}
                </li>
              )}

              {/* Table */}
              {contentItem.table && (
                <div className="mt-2 flex items-center justify-center">
                  <Table data={contentItem.table} />
                </div>
              )}

              {/* Table Title */}
              {contentItem.tabletitle1 && (
                <li className=" text-lg pt-3 font-bold">
                  {contentItem.tabletitle1}
                </li>
              )}

              {/* Table */}
              {contentItem.table1 && (
                <div className="mt-2 flex items-center justify-center">
                  <Table data={contentItem.table1} />
                </div>
              )}

              {/* Table Title */}
              {contentItem.tabletitle2 && (
                <li className=" text-lg pt-3 font-bold">
                  {contentItem.tabletitle2}
                </li>
              )}

              {/* Table */}
              {contentItem.table2 && (
                <div className="mt-2 flex items-center justify-center">
                  <Table data={contentItem.table2} />
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecImageViewer;
