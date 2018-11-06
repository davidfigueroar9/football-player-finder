import { setFilter, SET_FILTER } from './actions';

describe('playersReducers', () => {
  it('should return correct default state', () => {
    const filterExpected = {
      age: 23,
      name: 'messi',
      position: 'central',
    };
    expect(setFilter(filterExpected)).toEqual({ type: SET_FILTER, payload: filterExpected });
  });
});
