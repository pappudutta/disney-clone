import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;

  const getTrandingMovies = () => {
    GlobalApi.getTrandingVideos.then(res => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  const sliderRight = e => {
    e.scrollLeft += screenWidth - 16;
    console.log(screenWidth);
  };
  const sliderLeft = e => {
    e.scrollLeft -= screenWidth - 17;
    console.log(screenWidth);
  };

  useEffect(() => {
    getTrandingMovies();
  }, []);
  return (
    <div>
      <div className="text-white text-[50px] cursor-pointer">
        <HiChevronLeft
          className="hidden md:block absolute left-0 mt-[180px]"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiOutlineChevronRight
          className="hidden md:block absolute right-0 mt-[180px]"
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>
      <div
        className="flex overflow-x-auto w-full px-[20px] py-4 scrollbar-hide scroll-smooth  "
        ref={elementRef}
      >
        {movieList.map((movie, index) => (
          <img
            key={movie.id}
            src={IMAGE_BASE_URL + movie.backdrop_path}
            className="min-w-full md:h-[390px] object-cover object-left-top mr-5 rounded-lg hover:border-[4px] border-grey-100 transition-all duration-100 ease-in-out "
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
