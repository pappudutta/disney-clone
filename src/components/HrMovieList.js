import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieList({ movies }) {
  return (
    <div className="">
      <img
        src={IMAGE_BASE_URL + movies.backdrop_path}
        alt=""
        className="w-[400px] md:w-[220x] max-w-[400px] rounded-md hover:border-[3px] border-white hover:scale-105 transition-all duration-100 ease-in cursor-pointer"
      />
      <h2 className="text-[16px] font-bold mt-3 mx-3">{movies.title}</h2>
    </div>
  );
}

export default HrMovieList;
