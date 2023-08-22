import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w220_and_h330_face";

function MovieCard({ movies }) {
  return (
    <div className="hover:scale-105 transition-all duration-100 ease-in cursor-pointer">
      <img
        src={IMAGE_BASE_URL + movies.poster_path}
        alt=""
        className="w-[200px] md:w-[220x] max-w-[200px] rounded-md hover:border-[3px] border-white "
      />
      <h2 className="text-[16px] font-bold mt-3 mx-2">{movies.title}</h2>
    </div>
  );
}

export default MovieCard;
