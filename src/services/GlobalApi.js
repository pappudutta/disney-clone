import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "3dc91e9a22e2d1520b40e9732d06de16";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=3dc91e9a22e2d1520b40e9732d06de16";

const getTrandingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = id =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default { getTrandingVideos, getMovieByGenreId };
