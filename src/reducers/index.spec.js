import { createStore } from 'redux';
import rootReducer from './index';


describe('rootReducer', () => {
  it('should return correct default state', () => {
    const store = createStore(rootReducer);
    const filterExpected = {
      age: '',
      name: '',
      position: '',
    };
    expect(store.getState().players).toEqual([]);
    expect(store.getState().filters).toEqual(filterExpected);
  });
});
