import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MdOutlineRestartAlt } from "react-icons/md";

const ImageViewer = ({ src, alt }) => {
  return (
    <div className="">
      <TransformWrapper
      // initialScale={1}
      // initialPositionX={200}
      // initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <div className="relative rounded-lg ">
            <TransformComponent>
              <img
                src={src || ""}
                alt={alt || ""}
                //if you need change image size change here 
                className="3xl:min-h-[600px] 3xl:max-w-[850px]  2xl:max-h-[470px] 2xl:max-w-[650px] xl:max-h-[330px] xl:max-w-[480px] lg:max-h-[230px] lg:max-w-[330px] md:max-h-[180px] md:max-w-[280px]"
              />
            </TransformComponent>
            <div className="absolute bottom-2 right-2 ">
              <button
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-full text-sm px-4 py-4 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
                onClick={() => resetTransform()}
              >
                <span>
                  <MdOutlineRestartAlt size={18} />
                </span>
              </button>
            </div>
          </div>
        )}
      </TransformWrapper>
    </div>
  );
};

export default ImageViewer;
