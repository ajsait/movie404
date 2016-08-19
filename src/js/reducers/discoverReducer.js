export default function reducer(state = {
  page: 1,
  results: [],
  total_results: 0,
  total_pages: 1,
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
  case "FETCH_DISCOVER_MOVIES_LOADING": {
    return {...state, fetching: true};
  }
  case "FETCH_DISCOVER_MOVIES_SUCCESS": {
    return {
      ...state,
      fetching: false,
      fetched: true,
      ...action.payload
    };
  }
  case "FETCH_DISCOVER_MOVIES_ERROR": {
    return {
      ...state,
      fetching: false,
      error: action.payload
    };
  }
  default:
    return {...state};
  }
}
