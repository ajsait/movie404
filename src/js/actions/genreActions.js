import axios from "axios";

export function fetchMovieGenres() {
  return (dispatch) => {
    dispatch({
      type: "FETCH_GENRE",
      payload: axios.get(BASE_URL + "/genre/movie/list", {
        params: {
          api_key: API_KEY
        }})
    });
  };
}
