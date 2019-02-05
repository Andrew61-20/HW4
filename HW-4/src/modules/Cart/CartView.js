import React from 'react';
import s from './Cart.module.css';

const Cart = ({
  products = [],
  incrementAmount,
  decrementAmount,
  removeFromCart,
}) =>
  products.length > 0 ? (
    <table className={s.table}>
      <tbody>
        {products.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <button className={s.green} onClick={() => incrementAmount(id)}>
                +
              </button>
              {amount}
              <button className={s.yellow} onClick={() => decrementAmount(id)}>
                -
              </button>
            </td>
            <td>
              <button className={s.red} onClick={() => removeFromCart(id)}>
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1>В корзине нет товаров!</h1>
  );

export default Cart;
