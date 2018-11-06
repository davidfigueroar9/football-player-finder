import { combineReducers } from 'redux';
import playersReducers from './players.reducers';
import filtersReducers from './filters.reducers';

const rootReducer = combineReducers({
  players: playersReducers,
  filters: filtersReducers,
});

export default rootReducer;
