import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "3dc91e9a22e2d1520b40e9732d06de16";

const getTrandingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

export default { getTrandingVideos };
