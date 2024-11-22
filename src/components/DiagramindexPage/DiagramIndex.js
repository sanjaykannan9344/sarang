import { useNavigate } from "react-router-dom";
import { diagram } from "../../data/imagedata";
import { useCallback } from "react";
import BackButton from "../UI/BackButton";

const DiagramIndex = () => {
  const navigate = useNavigate();

  const handleOnClick = useCallback(
    (id) => navigate(`/diagramimage/${id}`, { replace: true }),
    [navigate],
  );

  return (
    <div className=" h-[82vh] md-h:h-[82vh]  lg-h:h-[84vh] xl-h:h-[85.2vh] xl-h2:h-[85.6vh] xl-h3:h-[87.7vh] 2xl-h:h-[88.5vh] 2xl-h1:h-[87vh] 2xl-h3:h-[89vh] 2xl-h2:h-[90.6vh] overflow-hidden  bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900  flex justify-center items-center  bg-cover py-2">
      <div>
        <BackButton to={`/`} />
      </div>
      <div className="bg-white  ">
        {diagram.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt="/"
              useMap={`#image_map_${item.id}`}
              // image size  
              className="3xl:min-h-[700px] 3xl:max-w-[900px] 2xl:max-h-[670px] 2xl:max-w-[750px] xl:max-h-[700px] xl:max-w-[780px] lg:max-h-[600px] lg:max-w-[500px] md:max-h-[600px] md:max-w-[3780px]"
            />
              {/* Image Map */}
            <map name={`image_map_${item.id}`}>
              {item.data.map((area, index) => (
                <area
                  className="cursor-pointer"
                  onClick={() => handleOnClick(item.id)}
                  key={index}
                  alt={area.name}
                  title={area.name}
                  coords={area.coords}
                  shape={area.shape}
                />
              ))}
            </map>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagramIndex;
