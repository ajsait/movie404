import { combineReducers } from "redux";

import configuration from "./configurationReducer";
import discover from "./discoverReducer";
import genres from "./genreReducer";

export default combineReducers({
  configuration,
  discover,
  genres
});
