import axios from "../axios";
import * as api from "../api";

export function fetchConfiguration() {
  return api.get({
    type: "FETCH_CONFIGURATION",
    promise: axios.get("/configuration")
  });
};
