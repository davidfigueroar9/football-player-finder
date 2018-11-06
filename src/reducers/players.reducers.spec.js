import playersReducers from './players.reducers';

import { ADD_PLAYERS } from '../actions';

describe('playersReducers', () => {
  it('should return correct default state', () => {
    const initialState = [];
    expect(playersReducers(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_PLAYERS', () => {
    const playersData = [
      {
        name: 'Eric Bailly',
        position: 'Centre-Back',
        dateOfBirth: '1990-12-12',
        nationality: 'England',
      },
    ];
    const expected = playersData;

    const action = {
      type: ADD_PLAYERS,
      payload: playersData,
    };
    expect(playersReducers([], action)).toEqual(expected);
  });
});
