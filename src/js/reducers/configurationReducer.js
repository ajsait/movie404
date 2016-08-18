export default function reducer(state = {
  configuration: {},
  error: null
}, action) {
  switch (action.type) {
  case "FETCH_CONFIGURATION_PENDING": {
    return {...state};
  }
  case "FETCH_CONFIGURATION_FULFILLED": {
    return {
      ...state,
      configuration: {...action.payload.data}
    };
  }
  case "FETCH_CONFIGURATION_REJECTED": {
    return {
      ...state,
      error: action.payload
    };
  }
  default:
    return {...state};
  }
}
