import { connect } from 'react-redux';
import CartView from '../modules/Cart/CartView';
import { menuActions, menuSelectors } from '../modules/menu';

const mapState = state => ({
  products: menuSelectors.getCartProducts(state),
});

const mapDispatch = {
  removeFromCart: menuActions.removeFromCart,
  incrementAmount: menuActions.incrementAmount,
  decrementAmount: menuActions.decrementAmount,
};

export default connect(
  mapState,
  mapDispatch,
)(CartView);
