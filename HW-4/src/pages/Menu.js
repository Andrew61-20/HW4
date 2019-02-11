import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import MenuGrid from '../modules/menu/MenuGridContainer';
import { menuActions, menuSelectors, menuOperations } from '../modules/menu';
import * as selectors from '../modules/Auth/selectors';


  class MenuPage extends Component {
  componentDidMount() {
	const category = queryString.parse(this.props.location.search).category;
    const { getCategories, getAllMenu1, getMenuItemsWithCategory} = this.props;
    getCategories();
	if(category !== undefined) {return getMenuItemsWithCategory (category)};
	getAllMenu1();
  }

  render() {
    const { match, history, location, ...restProps } = this.props;
    return (
      <MenuGrid
        match={match}
        history={history}
        location={location}
        {...restProps}
      />
    );
  }
}

const mapStateToProps = state => ({
  menu: menuSelectors.getItems(state),
  loading: menuSelectors.loading(state),
  categories: menuSelectors.getCategories(state),
  category: menuSelectors.getMenuItemsWithCategory(state),
  error: menuSelectors.error(state),
  isAuthenticated: selectors.isAuthenticated(state),
});

const mapDispatchToProps = {
  getAllMenu1: menuOperations.fetchNotes1,
  getMenuItemsWithCategory: menuOperations.getMenuItemsWithCategory,
  getCategories: menuOperations.getCategories,
  addToCart: menuActions.addToCart,
  incrementAmount: menuActions.incrementAmount,
  decrementAmount: menuActions.decrementAmount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuPage);

