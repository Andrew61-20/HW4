import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../modules/menu/MenuItemContainer';
import { menuSelectors, menuOperations } from '../modules/menu';
import s from '../modules/menu/MenuGrid.module.css';

class MenuItemPage extends Component {
  componentDidMount() {
    const { getMenuItemById, match } = this.props;
    getMenuItemById(match.params.id);

  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state) {
      return this.props.history.push(state.from);
    }
    this.props.history.push({
      pathname: '/menu',
    });
  };

  render() {
    const { match, ...restProps } = this.props;
    return (
      <div>
        <br />
        <button className={s.buttonCart} onClick={this.handleGoBack}>
          Назад к меню
        </button>
        <MenuItem id={match.params.id} {...restProps} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: menuSelectors.getItemById(state),
  loading: menuSelectors.loading(state),
});

const mapDispatchToProps = {
  getMenuItemById: menuOperations.getMenuItemById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuItemPage);
