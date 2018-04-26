import {combineReducers} from 'redux';

import count from './count';

const initialState = '';

const input = (state = initialState, action) => {
  console.log('state in input reducer', state)
  console.log('receive action', action)
  switch (action.type) {
    case 'INPUT_CHANGE':
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({
  count,
  input,
});
