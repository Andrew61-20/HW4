import React from 'react';
import MenuItem from './MenuItemView';
import Loader from '../../components/Loader';

const MenuItemContainer = ({ menu, loading, error }) => (
  <div>
    {loading && <Loader />}
    {error && <h1>Error</h1>}
    {!loading && <MenuItem menuItem={menu} />}
  </div>
);

export default MenuItemContainer;
