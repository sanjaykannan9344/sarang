import { BsPlayCircleFill } from "react-icons/bs";
import { videoData } from "../../data/videoData";
import { Link } from "react-router-dom";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import BackButton from "../UI/BackButton";
// Breadcrums Data
const breadcrumbsData = [
  { text: "ASMS Vehicle", url: "/asms-vehicle" },
  { text: "Entity Introduction", url: "/entity-introduction" },
  { text: "Entity View" },
];
const IndexVideoPage = () => {
  return (
    <div className=' h-[82vh] md-h:h-[82vh]  lg-h:h-[82.7vh] xl-h:h-[83.7vh] xl-h2:h-[84.5vh] xl-h3:h-[85.5vh] 2xl-h:h-[88.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] 2xl-h3:h-[89.5vh]  overflow-hidden  bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900'>
      <div className='sticky top-0  flex items-center justify-center border-white border-x-4 border-t-4 left-20 lg:mx-20 xl:mx-44 2xl:mx-52 py-3  z-10 '>
        <Breadcrumbs breadcrumbs={breadcrumbsData} />
      </div>
      <div className='px-5 flex items-center justify-center lg:mx-20  xl:mx-44 2xl:mx-52 border-white border-4 overflow-auto'>
        <div>
          <BackButton to={"../"} />
        </div>
        <div className=' h-[79vh] lg-h:h-[73.6vh] xl-h:h-[75vh] xl-h2:h-[76.5vh] xl-h3:h-[77.5vh]  2xl-h:h-[80.5vh] 2xl-h1:h-[80.1vh] 2xl-h2:h-[86vh] 2xl-h3:h-[83.2vh]'>
          <div className='grid grid-cols-3 mt-5 xl:grid-cols-3  lg:grid-cols-2 text-center gap-5 max-lg:gap-2 mx-2 '>
            {videoData.slice(0, 13).map((item) => (
              <div key={item.id} className=' mb-5'>
                <div>
                  <div
                    className='min-h-[200px] flex items-center text-center justify-center border-x-2 border-y-2 border-[#64a0ef]'
                    style={{
                      backgroundImage: `url(${item.gif}?nocache=${Math.floor(
                        Math.random() * 1000,
                      )})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <Link to={`/video/${item.id}`}>
                      <span>
                        <BsPlayCircleFill
                          size={40}
                          className='hover:text-blue-400 hover:bg-black rounded-full border-none'
                        />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className='text-white bg-gray-700 '>
                  <p className='p-2'>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexVideoPage;
