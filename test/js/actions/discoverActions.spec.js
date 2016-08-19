import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { expect } from "chai";
import nock from "nock";

import { BASE_URL, API_KEY } from "../../../src/js/config";
import * as actions from "../../../src/js/actions/discoverActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("discover actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("creates FETCH_DISCOVER_MOVIES_SUCCESS when fetching movies has been doned", () => {
    nock(BASE_URL)
      .get("/discover/movie")
      .query({api_key: API_KEY})
      .reply(200, {
        results: []
      });

    const expectedActions = [
      {
        type: "FETCH_DISCOVER_MOVIES_LOADING"
      },
      {
        type: "FETCH_DISCOVER_MOVIES_SUCCESS",
        payload: {
          results: []
        }
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.fetchMovies())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it("creates FETCH_DISCOVER_MOVIES_SUCCESS when fetching movies with additional parameters has been doned", () => {
    const params = {"sort_by" : "popularity.desc"};
    nock(BASE_URL)
      .get("/discover/movie")
      .query({api_key: API_KEY, ...params})
      .reply(200, {
        results: []
      });

    const expectedActions = [
      {
        type: "FETCH_DISCOVER_MOVIES_LOADING"
      },
      {
        type: "FETCH_DISCOVER_MOVIES_SUCCESS",
        payload: {
          results: []
        }
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.fetchMovies(params))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it("creates FETCH_DISCOVER_MOVIES_ERROR when fetching movies has error", () => {
    nock(BASE_URL)
      .get("/discover/movie")
      .query({api_key: API_KEY})
      .reply(404, {
        data: {
          status_message: "No movies found."
        }
      });

    const expectedActions = [
      {
        type: "FETCH_DISCOVER_MOVIES_LOADING"
      },
      {
        type: "FETCH_DISCOVER_MOVIES_ERROR",
        payload: {
          data: {
            status_message: "No movies found."
          }
        }
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.fetchMovies())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
