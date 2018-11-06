import filtersReducers from './filters.reducers';

import { SET_FILTER } from '../actions';

describe('filtersReducers', () => {
  it('should return correct default state', () => {
    const initialState = {
      age: '',
      position: '',
      name: '',
    };
    expect(filtersReducers(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_FILTER', () => {
    const filterData = {
      name: 'Messi',
      position: 'Centre-Back',
      age: 22,
    };
    const expected = filterData;

    const action = {
      type: SET_FILTER,
      payload: filterData,
    };
    expect(filtersReducers([], action)).toEqual(expected);
  });
});
