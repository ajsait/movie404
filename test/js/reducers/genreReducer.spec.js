import { expect } from "chai";
import reducer from "../../../src/js/reducers/genreReducer";

describe("genre reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).to.eql({error: null, genres: []});
  });

  it("should handle FETCH_GENRE_LOADING", () => {
    expect(reducer(undefined, {type: "FETCH_GENRE_LOADING", payload: {genres: [{id: 1, name: "Action"}]}})).to.eql({error: null, genres: []});
  });

  it("should handle FETCH_GENRE_SUCCESS", () => {
    expect(reducer(undefined, {type: "FETCH_GENRE_SUCCESS", payload: {genres: [{id: 1, name: "Action"}]}})).to.eql({error: null, genres: [{id: 1, name: "Action"}]});
  });

  it("should handle FETCH_GENRE_ERROR", () => {
    expect(reducer(undefined, {type: "FETCH_GENRE_ERROR", payload: {message: "An error occurred."}})).to.eql({error: {message: "An error occurred."}, genres: []});
  });
});
