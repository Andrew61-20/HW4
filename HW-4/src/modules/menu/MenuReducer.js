import types from './MenuActionTypes';

function itemReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS_BY_ID:
      return payload;

    default:
      return state;
  }
}

function entityReducer(state = {}, action) {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      return action.payload;

    case types.FETCH_SUCCESS1:
      return {
        ...state,
        ...action.payload.entities,
      };
    case types.FETCH_SUCCESS_BY_CATEGORY:
      return {
        ...state,
        ...action.payload.entities,
      };
    default:
      return state;
  }
}

function productsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS1:
      return payload.ids;
    case types.FETCH_SUCCESS_BY_CATEGORY:
      return payload.ids;
    default:
      return state;
  }
}

function categoriesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_CATEGORIES:
      return payload;
    default:
      return state;
  }
}

function loadingReducer(state = false, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS:
    case types.FETCH_SUCCESS1:
    case types.FETCH_SUCCESS_BY_ID:
    case types.FETCH_SUCCESS_BY_CATEGORY:
    case types.FETCH_CATEGORIES:
    case types.ADD_TO_CART:
    case types.INCREMENT_AMOUNT:
    case types.DECREMENT_AMOUNT:
    case types.FETCH_ERROR:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;

    case types.FETCH_ERROR:
      return payload;

    default:
      return state;
  }
}
export default {
  productsReducer,
  itemReducer,
  categoriesReducer,
  loadingReducer,
  errorReducer,
  entityReducer,
};
