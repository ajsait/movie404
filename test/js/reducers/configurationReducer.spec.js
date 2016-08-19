import { expect } from "chai";
import reducer from "../../../src/js/reducers/configurationReducer";

describe("configuration reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).to.eql({error: null, configuration: {}});
  });

  it("should handle FETCH_CONFIGURATION_LOADING", () => {
    expect(reducer(undefined, {type: "FETCH_CONFIGURATION_LOADING", payload: {images: {}, change_keys: []}})).to.eql({error: null, configuration: {}});
  });

  it("should handle FETCH_CONFIGURATION_SUCCESS", () => {
    expect(reducer(undefined, {type: "FETCH_CONFIGURATION_SUCCESS", payload: {images: {}, change_keys: []}})).to.eql({error: null, configuration: {images: {}, change_keys: []}});
  });

  it("should handle FETCH_CONFIGURATION_ERROR", () => {
    expect(reducer(undefined, {type: "FETCH_CONFIGURATION_ERROR", payload: {message: "An error occurred."}})).to.eql({error: {message: "An error occurred."}, configuration: {}});
  });
});
