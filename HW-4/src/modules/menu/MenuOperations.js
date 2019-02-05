import axios from 'axios';
import actions from './MenuActions';

axios.defaults.baseURL = 'http://localhost:8000';

const fetchNotes1 = () => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    const response = await axios.get('/menu');
    dispatch(actions.fetchSuccess1(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const getMenuItemsWithCategory = category => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get(`/menu?category=${category}`);
    dispatch(actions.fetchSuccessCategory(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const getMenuItemById = id => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get(`/menu/${id}`);
    dispatch(actions.fetchSuccessById(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};
const getCategories = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get(`/categories`);
    dispatch(actions.fetchCategories(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default {
  fetchNotes1,
  getMenuItemsWithCategory,
  getCategories,
  getMenuItemById,
};
