import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { expect } from "chai";
import nock from "nock";

import { BASE_URL, API_KEY } from "../../../src/js/config";
import * as actions from "../../../src/js/actions/configurationActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("configuration actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("creates FETCH_CONFIGURATION_SUCCESS when fetching configuration has been doned", () => {
    nock(BASE_URL)
      .get("/configuration")
      .query({api_key: API_KEY})
      .reply(200, {
        images: {},
        change_keys: []
      });

    const expectedActions = [
      {
        type: "FETCH_CONFIGURATION_LOADING"
      },
      {
        type: "FETCH_CONFIGURATION_SUCCESS",
        payload: {
          images: {},
          change_keys: []
        }
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.fetchConfiguration())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

  it("creates FETCH_CONFIGURATION_ERROR when fetching configuration has error", () => {
    nock(BASE_URL)
      .get("/configuration")
      .query({api_key: API_KEY})
      .reply(404, {
        data: {
          status_message: "ERROR"
        }
      });

    const expectedActions = [
      {
        type: "FETCH_CONFIGURATION_LOADING"
      },
      {
        type: "FETCH_CONFIGURATION_ERROR",
        payload: {
          data: {
            status_message: "ERROR"
          }
        }
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.fetchConfiguration())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
