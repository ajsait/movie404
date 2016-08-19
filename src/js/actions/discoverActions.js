import axios from "../axios";
import * as api from "../api";

export function fetchMovies(params = {}) {
  return api.get({
    type: "FETCH_DISCOVER_MOVIES",
    promise: axios.get("/discover/movie", {
      params: {
        ...params
      }
    })
  });
};
