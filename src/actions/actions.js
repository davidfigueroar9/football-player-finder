export const ADD_PLAYERS = 'ADD_NOTE';

export const fetchPlayers = () => async (dispatch, getState, api) => {
  let res;
  try {
    res = await api.get('/');
  } catch (e) {
    return true;
  }
  dispatch({
    type: ADD_PLAYERS,
    payload: res.data,
  });
  return false;
};

export const SET_FILTER = 'SET_FILTER';
export const setFilter = filters => ({
  type: SET_FILTER,
  payload: filters,
});
