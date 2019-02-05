import { combineReducers } from 'redux';
import types from './MenuActionTypes';

function ids(state = [], { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return state.includes(payload.id) ? state : [...state, payload.id];

    case types.REMOVE_FROM_CART:
      return state.filter(id => id !== payload.id);

    default:
      return state;
  }
}
function amount(state = {}, { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
      };

    case types.INCREMENT_AMOUNT:
      return {
        ...state,
        [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
      };

    case types.DECREMENT_AMOUNT:
      return {
        ...state,
        [payload.id]: state[payload.id] > 1 ? state[payload.id] - 1 : 1,
      };

    case types.REMOVE_FROM_CART: {
      return { ...state, [payload.id]: 0 };
    }

    default:
      return state;
  }
}

export default combineReducers({
  ids,
  amount,
});
