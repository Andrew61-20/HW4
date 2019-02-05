import React from 'react';
import s from './MenuGrid.module.css';

const MenuCard = ({ name, image, price }) => (
  <div>
    <img className={s.linkItem} src={image} alt={name} />
    <p>{name}</p>
    <p>Цена: {price} грн.</p>
  </div>
);

export default MenuCard;
