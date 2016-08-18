import axios from "axios";

export function fetchMovies(params = {}) {
  return function(dispatch) {
    dispatch({
      type: "FETCH_DISCOVER_MOVIES",
      payload: axios.get(BASE_URL + "/discover/movie", {
        params: {
          ...params,
          api_key: API_KEY
        }})
    });
  };
}
