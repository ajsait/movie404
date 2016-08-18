import axios from "axios";

export function fetchConfiguration() {
  return function(dispatch) {
    dispatch({
      type: "FETCH_CONFIGURATION",
      payload: axios.get(BASE_URL + "/configuration", {
        params: {
          api_key: API_KEY
        }})
    });
  };
}
