import {
  ADD_PLAYERS,
} from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_PLAYERS: {
      return [...state, ...action.payload];
    }

    default:
      return state;
  }
}
