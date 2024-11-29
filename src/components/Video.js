import BackButton from "../components/UI/BackButton";
import VideoPlayer from "../components/UI/VideoPlayer";

export default function Video() {
  return (
    <div className="h-[100vh] md-h:h-[83vh] lg-h:h-[84vh] xl-h:h-[85.2vh] xl-h2:h-[86vh] xl-h3:h-[87.7vh] 2xl-h:h-[89.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] 2xl-h3:h-[89vh] bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900 overflow-hidden ">
      <div>
        <BackButton to={"/"} />
      </div>
      <VideoPlayer></VideoPlayer>
    </div>
  );
}
