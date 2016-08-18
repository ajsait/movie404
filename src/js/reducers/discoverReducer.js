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
  case "FETCH_DISCOVER_MOVIES_PENDING": {
    return {...state, fetching: true};
  }
  case "FETCH_DISCOVER_MOVIES_FULFILLED": {
    return {
      ...state,
      fetching: false,
      fetched: true,
      ...action.payload.data
    };
  }
  case "FETCH_DISCOVER_MOVIES_REJECTED": {
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
