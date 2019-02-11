import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../configs/routes';
import ProtectedRoute from '../modules/Auth/ProtectedRoute/ProtectedRoute';
import * as operations from '../modules/Auth/operations';
import AppHeader from './AppHeader/AppHeader';
import MenuPage from '../pages/Menu';
import MenuItemPage from '../pages/MenuItem';
import MenuAdd from '../pages/MenuAdd';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import DeliveryPage from '../pages/Delivery';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
import AccountPage from '../pages/Account';
import OrderPage from '../pages/OrderPage';
import MealPlannerPage from '../pages/Planner';

class App extends Component {
  componentDidMount() {
    this.props.refreshCurrentUser();
  }

  render() {
    return (
      <div>
        <AppHeader />

        <Switch>
          <Route exact path={routes.MENU} component={MenuPage} />
          <Route exact path={routes.MENU_ADD} component={MenuAdd} />
          <Route path={routes.MENU_ITEM} component={MenuItemPage} />
          <Route path={routes.ABOUT} component={AboutPage} />
          <Route path={routes.CONTACT} component={ContactPage} />
          <Route path={routes.DELIVERY} component={DeliveryPage} />
          <Route path={routes.SIGNUP} component={SignUp} />
          <Route path={routes.SIGNIN} component={SignIn} />
          <ProtectedRoute
            path={routes.CART}
            redirectTo={routes.SIGNIN}
            component={Cart}
          />
          <ProtectedRoute
            path={routes.ACCOUNT}
            redirectTo={routes.SIGNIN}
            component={AccountPage}
          />
          <ProtectedRoute
            path={routes.ORDER_HISTORY}
            redirectTo={routes.SIGNIN}
            component={OrderPage}
          />
          <Route path={routes.PLANNER} component={MealPlannerPage} />
          <Redirect to={routes.MENU} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  { refreshCurrentUser: operations.refreshCurrentUser },
)(App);
