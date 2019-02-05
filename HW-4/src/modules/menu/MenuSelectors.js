import { createSelector } from 'reselect';

const getProductIds = state => state.products;
const getProductsEntities = state => state.entities.products;

const getItems = createSelector(
  [getProductIds, getProductsEntities],
  (ids, entities) => ids.map(id => entities[id]),
);

const getItemById = state => state.menu;
const loading = state => state.loading;
const error = state => state.error;
const getCategories = state => state.categories;

const getCartProductIds = state => state.cart.ids;
const getCartProductAmounts = state => state.cart.amount;

const getCartProductsAmount = createSelector(
  getCartProductIds,
  ids => ids.length,
);

const getCartProducts = createSelector(
  [getCartProductIds, getCartProductAmounts, getProductsEntities],
  (ids, amounts, entities) =>
    ids.map(id => ({
      ...entities[id],
      amount: amounts[id],
    })),
);

export default {
  getItemById,
  loading,
  error,
  getCategories,
  getProductIds,
  getProductsEntities,
  getItems,
  getCartProductsAmount,
  getCartProducts,
};
