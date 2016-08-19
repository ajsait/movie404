export default function reducer(state = {
  configuration: {},
  error: null
}, action) {
  switch (action.type) {
  case "FETCH_CONFIGURATION_LOADING": {
    return {...state};
  }
  case "FETCH_CONFIGURATION_SUCCESS": {
    return {
      ...state,
      configuration: {...action.payload}
    };
  }
  case "FETCH_CONFIGURATION_ERROR": {
    return {
      ...state,
      error: action.payload
    };
  }
  default:
    return {...state};
  }
}
