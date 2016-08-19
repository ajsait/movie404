import axios from "../axios";
import * as api from "../api";

export function fetchMovieGenres() {
  return api.get({
    type: "FETCH_GENRE",
    promise: axios.get("/genre/movie/list")
  });
};
