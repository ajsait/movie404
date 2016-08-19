import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { expect } from "chai";
import nock from "nock";

import { BASE_URL, API_KEY } from "../../../src/js/config";
import * as actions from "../../../src/js/actions/genreActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("genre actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("creates FETCH_GENRE_SUCCESS when fetching genre has been doned", () => {
    nock(BASE_URL)
      .get("/genre/movie/list")
      .query({api_key: API_KEY})
      .reply(200, {
        genres: []
      });

    const expectedActions = [
      {
        type: "FETCH_GENRE_LOADING"
      },
      {
        type: "FETCH_GENRE_SUCCESS",
        payload: {
          genres: []
        }
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.fetchMovieGenres())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it("creates FETCH_GENRE_ERROR when fetching genre has error", () => {
    nock(BASE_URL)
      .get("/genre/movie/list")
      .query({api_key: API_KEY})
      .reply(404, {
        data: {
          status_code : 34,
          status_message: "The resource you requested could not be found."
        }
      });

    const expectedActions = [
      {
        type: "FETCH_GENRE_LOADING"
      },
      {
        type: "FETCH_GENRE_ERROR",
        payload: {
          data: {
            status_code : 34,
            status_message: "The resource you requested could not be found."
          }
        }
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.fetchMovieGenres())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
