import React from 'react';

const MenuItemView = ({
  id,
  menuItem: { name, description, ingredients = [], image, alt, price },
}) => (
  <div className="product">
    <h2 className="name"> {name}</h2>
    <p className="description"> {description}</p>
    <img className="image" src={image} alt={alt} width="300px" />
    <p className="price">{price} UAH</p>
    <ul>
      {ingredients.map(elem => (
        <li key={elem} className="ingredientList">
          {elem}
        </li>
      ))}
    </ul>
  </div>
);

export default MenuItemView;
