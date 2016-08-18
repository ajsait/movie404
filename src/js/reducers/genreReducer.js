export default function reducer(state = {
  genres: [],
  error: null
}, action) {
  switch (action.type) {
  case "FETCH_GENRE_PENDING": {
    return {...state};
  }
  case "FETCH_GENRE_FULFILLED": {
    return {
      ...state,
      genres: [...action.payload.data.genres]
    };
  }
  case "FETCH_GENRE_REJECTED": {
    return {
      ...state,
      error: action.payload
    };
  }
  default:
    return {...state};
  }
}
