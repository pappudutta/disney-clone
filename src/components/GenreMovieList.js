import React from "react";
import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map(
        (genre, index) =>
          index < 5 && (
            <div className="p-8 px-8 md:px-16">
              <h2 className="text-[20px] text-bold">{genre.name}</h2>
              <MovieList genreId={genre.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
