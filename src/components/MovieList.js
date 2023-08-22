import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";

function MovieList(genreId) {
  const [moviesList, setMovieList] = useState([]);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then(res => {
      setMovieList(res.data.results);
    });
  };

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  return (
    <div>
      {moviesList.map((movie, index) => (
        <MovieCard movie={movie} index={index} />
      ))}
    </div>
  );
}

export default MovieList;
