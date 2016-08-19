import { expect } from "chai";
import reducer from "../../../src/js/reducers/discoverReducer";

describe("discovery reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {}))
    .to.eql({
      page: 1,
      results: [],
      total_results: 0,
      total_pages: 1,
      fetching: false,
      fetched: false,
      error: null
    });
  });

  it("should handle FETCH_DISCOVER_MOVIES_LOADING", () => {
    expect(reducer(undefined, {
      type: "FETCH_DISCOVER_MOVIES_LOADING",
      payload: {
        page: 1,
        results: [],
        total_results: 0,
        total_pages: 1
      }
    }))
    .to.eql({
      page: 1,
      results: [],
      total_results: 0,
      total_pages: 1,
      fetching: true,
      fetched: false,
      error: null
    });
  });

  it("should handle FETCH_DISCOVER_MOVIES_SUCCESS", () => {
    expect(reducer(undefined, {
      type: "FETCH_DISCOVER_MOVIES_SUCCESS",
      payload: {
        page: 1,
        results: [{original_title: "SAMPLE"}],
        total_results: 0,
        total_pages: 1
      }
    }))
    .to.eql({
      page: 1,
      results: [{original_title: "SAMPLE"}],
      total_results: 0,
      total_pages: 1,
      fetching: false,
      fetched: true,
      error: null
    });
  });

  it("should handle FETCH_DISCOVER_MOVIES_ERROR", () => {
    expect(reducer(undefined, {
      type: "FETCH_DISCOVER_MOVIES_ERROR",
      payload: {
        message: "An error occurred retrieving movies."
      }
    }))
    .to.eql({
      page: 1,
      results: [],
      total_results: 0,
      total_pages: 1,
      fetching: false,
      fetched: false,
      error: {
        message: "An error occurred retrieving movies."
      }
    });
  });
});
