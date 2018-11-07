import {
  setFilter,
  fetchPlayers,
  SET_FILTER,
  ADD_PLAYERS,
} from './actions';

describe('playersReducers', () => {
  it('should return correct shape of action setFilter', () => {
    const filterExpected = {
      age: 23,
      name: 'messi',
      position: 'central',
    };
    expect(setFilter(filterExpected)).toEqual({ type: SET_FILTER, payload: filterExpected });
  });

  it('should handled correct shape of action fetchPlayers', async () => {
    const api = {
      get: () => Promise.resolve({ data: [] }),
    };
    const getState = () => ({});
    const dispatch = jest.fn();
    const error = await fetchPlayers()(dispatch, getState, api);
    expect(dispatch).toBeCalledWith({ type: ADD_PLAYERS, payload: [] });
    expect(error).toBe(false);
  });

  it('should handled correct shape of action fetchPlayers with error', async () => {
    const api = {
      get: () => Promise.reject(),
    };
    const getState = () => ({});
    const dispatch = jest.fn();
    const error = await fetchPlayers()(dispatch, getState, api);
    expect(error).toBe(true);
  });
});
