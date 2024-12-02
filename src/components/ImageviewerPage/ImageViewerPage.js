import { useState, useEffect } from "react";
import ImageViewer from "../UI/ImageViewer";
import { subContent } from "../../data/contenttitle";
import "./ImageViewerPage.css";
import { useParams } from "react-router-dom";

import BackButton from "../UI/BackButton";
import ImageLoader from "../UI/Loader/ImageLoader";

const ImageViewerPage = () => {
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
              <BackButton to={`/contenttitle/${0}`} />
            </div>

            {/* main Image */}
            <div className="lg:pl-5 xl:pl-8 2xl:pl-10 lg:-mt-5">
              {image && (
                <div className="my-5 bg-black border-x-[#e5bbff] p-1.5 border-y-[#e5bbff] border-4 shadow-[0px_0px_5px_6px_rgba(165,_39,_255,_0.48)]">
                  <div className=" border-1 p-2   shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)] ">
                    <div className="p-3 corner-border flex justify-center text-center ">
                      <div
                        // Changing background color using id
                        className={`p-1   ${
                          parseInt(id) === 4 ||
                          parseInt(id) === 5 ||
                          parseInt(id) === 6 ||
                          parseInt(id) === 7
                            ? "bg-[#9ae3f5]"
                            : "bg-black"
                        }`}
                      >
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
          <div className=" sticky top-0 bottom-0 bg-[#291f41] p-3 border-r-4 border-white">
            <div className="text-center  text-white border-x-[#e5bbff] p-1 ring-offset-4 border-y-[#e5bbff] bg-[#100824] border-4 shadow-[1px_1px_4px_4px_rgba(165,_39,_255,_0.48)] ">
              <div className="border-1 p-1 shadow-[0px_0px_6px_6px_rgba(165,_39,_255,_0.48)]">
                <p className=" text-lg font-semibold xl:text-base lg:text-sm">
                  {contentItem.name}
                </p>
              </div>
            </div>
          </div>
          <div className=" text-black bg-violet-100 h-full px-3 text-justify  overflow-auto pb-10 ">
            {/* <ul className="list-none">
              <li className=" text-lg pt-3">{contentItem.content}</li>
              {contentItem.subcontent && (
                <li className=" text-lg">{contentItem.subcontent}</li>
              )}
              {contentItem.subtitle && (
                <li className=" text-lg text-white font-bold bg-[#291f41] p-3 border-r-4 text-cen border-rlack hover:bg-gray-700">
                  {contentItem.subtitle}
                </li>
              )}
              {contentItem.content1 && (
                <li className=" text-lg">{contentItem.content1}</li>
              )}
              {contentItem.content2 && (
                <li className=" text-lg">{contentItem.content2}</li>
              )}{" "}
              {contentItem.content3 && (
                <li className=" text-lg">{contentItem.content3}</li>
              )}{" "}
              {contentItem.content4 && (
                <li className=" text-lg">{contentItem.content4}</li>
              )}
              {contentItem.content5 && (
                <li className=" text-lg">{contentItem.content5}</li>
              )}
              {contentItem.content6 && (
                <li className=" text-lg">{contentItem.content6}</li>
              )}{" "}
              {contentItem.content7 && (
                <li className=" text-lg ">{contentItem.content7}</li>
              )}{" "}
              {contentItem.content8 && (
                <li className=" text-lg">{contentItem.content8}</li>
              )} */}
            {/* Table Title */}
            {/* {contentItem.tabletitle && (
                <li className=" text-lg pt-3 font-bold">
                  {contentItem.tabletitle}
                </li>
              )}
              {contentItem.tablesubtitle && (
                <li className=" text-lg pt-3 ">{contentItem.tablesubtitle}</li>
              )}
              {/* Table */}
            {/* {contentItem.table && (
                <div className="mt-5 flex items-center justify-center">
                  <Table data={contentItem.table} />
                </div>
              )}
              <p className=" text-lg font-bold">{contentItem.content9}</p>
              <p className=" text-lg">{contentItem.content10}</p>
            </ul>   */}
            <div className="overflow-x-auto mt-20">
              <p className=" text-lg text-white font-bold bg-[#291f41] p-3  text-center border-rlack hover:border-double border-4 border-violet-600">
                {" "}
                {contentItem.content}
              </p>
              <table className="min-w-full table-auto border-collapse  text-center border-double border-4 border-indigo-600 ">
                <tbody>
                  <tr className="hover:bg-violet-200">
                    <td className="px-6 py-4 text-sm  border-r border-b border-black bg-violet-300 ">
                      {contentItem.content1}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      {contentItem.content8[0]}
                    </td>
                    <td className="px-6 py-4 text-sm border-r border-b border-black bg-violet-300">
                      0.15
                    </td>
                    <td className="px-6 py-4 text-sm   border-r border-b border-black">
                      0.15
                    </td>
                    <td className="px-6 py-4 text-sm   border-r border-b border-black bg-violet-300">
                      0.15
                    </td>
                  </tr>
                  <tr className="hover:bg-violet-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-b border-black">
                      {contentItem.content2}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      {contentItem.content8[1]}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      0.46
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      0.46
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      0.46
                    </td>
                  </tr>
                  <tr className="hover:bg-violet-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-b border-black bg-violet-300">
                      {contentItem.content3}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      {contentItem.content8[2]}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black bg-violet-300">
                      0.21
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      0.21
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black bg-violet-300">
                      0.21
                    </td>
                  </tr>
                  <tr className="hover:bg-violet-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-b border-black">
                      {contentItem.content4}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      {contentItem.content8[3]}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      0.25
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      0.25
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      0.25
                    </td>
                  </tr>
                  <tr className="hover:bg-violet-200">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-b border-black bg-violet-300">
                      {contentItem.content5}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black ">
                      {contentItem.content8[4]}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black bg-violet-300">
                      0.68
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      0.68
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black bg-violet-300">
                      0.68
                    </td>
                  </tr>
                  <tr className="hover:bg-violet-200 ">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-b border-black">
                      {contentItem.content6}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      {contentItem.content8[5]}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      0.31
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      0.31
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      0.31
                    </td>
                  </tr>
                  <tr className="hover:bg-violet-200 ">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-b border-black bg-violet-300">
                      {contentItem.content7}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      {contentItem.content8[6]}
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black bg-violet-300">
                      0.07
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black">
                      0.07
                    </td>
                    <td className="px-6 py-4 text-sm  border-r border-b border-black bg-violet-300">
                      0.07
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewerPage;
