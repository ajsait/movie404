export default function reducer(state = {
  genres: [],
  error: null
}, action) {
  switch (action.type) {
  case "FETCH_GENRE_LOADING": {
    return {...state};
  }
  case "FETCH_GENRE_SUCCESS": {
    return {
      ...state,
      genres: [...action.payload.genres]
    };
  }
  case "FETCH_GENRE_ERROR": {
    return {
      ...state,
      error: action.payload
    };
  }
  default:
    return {...state};
  }
}
