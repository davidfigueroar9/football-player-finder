import { combineReducers } from 'redux';
import playersReducers from './players.reducers';

const rootReducer = combineReducers({
  players: playersReducers,
  filters: {},
});

export default rootReducer;
