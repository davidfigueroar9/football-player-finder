import {
  SET_FILTER,
} from '../actions';

const initialState = {
  age: '',
  position: '',
  name: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload;
    }

    default:
      return state;
  }
}
