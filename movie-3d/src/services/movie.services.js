import { apiGet
    
 } from "../api/apiMethod";

export const fetchMovies = () => apiGet("/movies");

export const playMovie = (videoId) =>
  apiGet(`/movies/play/${videoId}`);
