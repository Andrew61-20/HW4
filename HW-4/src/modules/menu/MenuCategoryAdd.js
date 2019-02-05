import React from 'react';

const MenuCategoryAdd = ({ category, categories = [], onChange }) => (
  <select name="category" value={category} onChange={onChange}>
    <option value="" disabled>
      Выберите категорию блюд
    </option>
    {categories.map(elem => (
      <option key={elem.id} value={elem.name}>
        {elem.name}
      </option>
    ))}
  </select>
);

export default MenuCategoryAdd;
