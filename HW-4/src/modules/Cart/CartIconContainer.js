import { connect } from 'react-redux';
import CartIconView from './CartIconView';
import { menuSelectors } from '../menu';

const mapState = state => ({
  amount: menuSelectors.getCartProductsAmount(state),
});

export default connect(mapState)(CartIconView);
