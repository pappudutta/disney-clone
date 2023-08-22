import React from "react";
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieCard({ movie, index }) {
  return <div>
<img src={IMAGE_BASE_URL+movie.} alt="" />
  </div>;
}

export default MovieCard;
