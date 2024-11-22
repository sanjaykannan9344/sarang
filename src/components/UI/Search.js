import React, { useCallback, useEffect, useState } from "react";
import { videoData } from "../../data/videoData";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();

  const [video, setvideo] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    getData(videoData);
  }, []);

  const getData = (videoData) => {
    setvideo(videoData);
  };
  const bySearch = (video, search) => {
    if (search) {
      return video.name.toLowerCase().includes(search.toLowerCase());
    } else return true;
  };
  const filteredList = (video, search) => {
    if (video) {
      return video.filter((video) => bySearch(video, search));
    } else {
      return [];
    }
  };
    // Navigation function
  const handleOnClick = useCallback(
    (filteredVideos) =>
      navigate(`./video/${filteredVideos[0].id}`, { replace: true }),
    [navigate],
  );
  return (
    <>
      <div
        className="bg-gray-500 p-2 flex gap-2 rounded-md"
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      >
        <input className="pl-3 text-black " />
        <button
          className="bg-[#1bba9a] hover:bg-[#40a894] text-white rounded-md"
          onClick={() => {
            if (search) {
              const filteredVideos = filteredList(video, search);
              if (filteredVideos.length > 0) {
                handleOnClick(filteredVideos);
              }
            }
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
