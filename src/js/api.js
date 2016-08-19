export function get({ type, promise }) {
  return (dispatch) => {
    dispatch({type: `${type}_LOADING`});
    return promise.then((response) => {
      dispatch({type: `${type}_SUCCESS`, payload: response.data});
    })
    .catch((error) => {
      dispatch({type: `${type}_ERROR`, payload: error.response.data});
    });
  };
}
