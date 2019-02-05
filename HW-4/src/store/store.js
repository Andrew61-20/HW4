import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menuReducer from '../modules/menu/MenuReducer';
import cartReducer from '../modules/menu/cartReducer';
import sessionReducer from '../modules/Auth/sessionReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'entities'],
};
const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
  products: menuReducer.productsReducer,
  menu: menuReducer.itemReducer,
  categories: menuReducer.categoriesReducer,
  loading: menuReducer.loadingReducer,
  error: menuReducer.errorReducer,
  cart: cartReducer,
  entities: menuReducer.entityReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
