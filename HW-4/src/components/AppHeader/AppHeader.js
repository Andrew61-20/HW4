import React from 'react';
import { connect } from 'react-redux';
import UserProfile from '../../modules/Auth/UserProfile/UserProfile';
import AuthNav from '../../modules/Auth/AuthNav/AuthNav';
import * as selectors from '../../modules/Auth/selectors';
import * as operations from '../../modules/Auth/operations';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../../modules/user/UserMenu/UserMenu';
import CartIcon from '../../modules/Cart/CartIconContainer';
import appLogo from './assets/logo.png';
import avatar from './assets/avatar.jpg';
import navItems from '../../configs/main-nav';
import s from './AppHeader.module.css';

const AppHeader = ({ isAuthenticated, user, onSignOut }) => (
  <div>
    <header className={s.header}>
      <div className={s.logo}>
        <Logo image={appLogo} width={80} height={80} />
      </div>
      <Navigation items={navItems} />

      {isAuthenticated ? (
        <UserProfile onSignOut={onSignOut} user={user} />
      ) : (
        <AuthNav />
      )}

      <div className={s.usermenu}>
        <UserMenu avatar={avatar} name="Bob Ross" />
      </div>
      <CartIcon />
    </header>
  </div>
);
const mapState = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
  user: selectors.getUser(state),
});

const mapDispatch = {
  onSignOut: operations.signOut,
};

export default connect(
  mapState,
  mapDispatch,
)(AppHeader);
