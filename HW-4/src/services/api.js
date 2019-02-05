import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

const getAllMenuItems = async () => {
  const response = await axios.get('/menu');
  return response.data;
};

const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`);
  return response.data;
};

const getMenuItemsWithCategory = async category => {
  const response = await axios.get(`/menu?category=${category}`);
  return response.data;
};

const getCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};

const deleteMenuItem = id =>
  axios.delete(`/menu/${id}`).then(response => response.status === 200);

const addMenuItem = item =>
  axios.post('/menu', item).then(response => response.data);

const getAllOrderItems = () =>
  axios.get('/orderlist').then(response => response.data);

const getOrderItemById = id =>
  axios.get(`/orderlist/${id}`).then(response => response.data);

const deleteOrderItem = id =>
  axios.delete(`/orderlist/${id}`).then(response => response.status === 200);

const addOrderItem = item =>
  axios.post('/orderlist', item).then(response => response.data);

export {
  getAllMenuItems,
  getMenuItemById,
  getCategories,
  deleteMenuItem,
  addMenuItem,
  getMenuItemsWithCategory,
  getAllOrderItems,
  getOrderItemById,
  deleteOrderItem,
  addOrderItem,
};
