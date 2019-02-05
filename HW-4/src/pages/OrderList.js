import React from 'react';
import s from '../modules/menu/MenuGrid.module.css';

const OrderList = ({ items, onShowMoreInfo, onDelete }) => (
  <table>
    <tbody>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Address</th>
        <th>Rating</th>
      </tr>
      {items.map(item => (
        <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.price}</td>
          <td>{item.address}</td>
          <td>{item.raiting}</td>
          <td>
            <button
              className={s.yellow}
              type="button"
              onClick={e => onShowMoreInfo(item.id, e)}
            >
              Show more
            </button>
            <button
              className={s.red}
              type="button"
              onClick={e => onDelete(item.id, e)}
            >
              X
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrderList;
