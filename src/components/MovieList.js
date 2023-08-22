import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import HrMovieList from "./HrMovieList";

function MovieList({ genreId, index_ }) {
  const [moviesList, setMovieList] = useState([]);
  const elementRef = useRef();

  const screenWidth = window.innerWidth;

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then(res => {
      setMovieList(res.data.results);
    });
  };

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const sliderRight = e => {
    e.scrollLeft += screenWidth;
    console.log(screenWidth);
  };
  const sliderLeft = e => {
    e.scrollLeft -= screenWidth;
    console.log(screenWidth);
  };

  return (
    <div className="">
      <div className="text-[30px] cursor-pointer">
        <HiChevronLeft
          className="hidden md:block absolute left-0 mt-20 ml-10"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiOutlineChevronRight
          className="hidden md:block absolute right-0 mt-20 mr-10"
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>
      <div
        className="flex overflow-auto gap-3 scroll-smooth scrollbar-hide p-5"
        ref={elementRef}
      >
        {moviesList.map((movie, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieList movies={movie} />
            ) : (
              <MovieCard movies={movie} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
