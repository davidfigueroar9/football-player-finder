export const ADD_PLAYERS = 'ADD_NOTE';

export const fetchPlayers = () => async (dispatch, getState, api) => {
  const res = await api.get('/');
  dispatch({
    type: ADD_PLAYERS,
    payload: res.data,
  });
};

export const SET_FILTER = 'SET_FILTER';
export const setFilter = filters => ({
  type: SET_FILTER,
  payload: filters,
});
