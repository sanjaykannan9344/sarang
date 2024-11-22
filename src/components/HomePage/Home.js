import "rsuite/dist/rsuite.min.css";
import MainDropdown from "../UI/Dropdown/MainDropdown";
// import Search from "./UI/Search";

function Home() {
  return (
    <div
      className="h-[100vh] overflow-hidden bg-cover bg-center bg-no-repeat "
      style={{
        marginTop: "-40px",
        backgroundImage: `url(./Image/backroundImage.jpg)`,
        backgroundSize: "100% 95%",
      }}
    >
      <div className="h-[88.5vh] w-full flex  fixed">
        {/* Dropdown */}
        <div className="mx-10 w-full flex justify-between ">
          <div className="mt-20 flex flex-col gap-2">
            <MainDropdown />
          </div>
          {/* Seacrch Bar */}

          {/* <div className="mt-5">
            <Search />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
