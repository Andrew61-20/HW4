import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../Auth/selectors';
import s from './CartIcon.module.css';

const CartIcon = ({ amount, isAuthenticated }) =>
  isAuthenticated && (
    <div className={s.container}>
      <Link to="/cart">
        <img
          src="https://image.flaticon.com/icons/svg/263/263142.svg"
          width="60"
          alt=""
        />
        <span className={s.amount}>{amount}</span>
      </Link>
    </div>
  );

const mapState = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
});

export default connect(mapState)(CartIcon);
