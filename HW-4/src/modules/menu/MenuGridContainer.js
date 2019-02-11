import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import CategorySelector from './CategorySelector';
import MenuGrid from './MenuGridView';
import Loader from '../../components/Loader';
import s from './MenuGrid.module.css';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class MenuGridContainer extends Component {
  state = {
    filter: false,
  };

  async componentDidUpdate(prevProps1) {
	const prevCategory = getCategoryFromProps(prevProps1);
    const nextCategory = getCategoryFromProps(this.props);
    const { getMenuItemsWithCategory, getAllMenu1 } = this.props;

    if (prevCategory === nextCategory) return;
    if (this.props.location.search === '/menu') {
      try {
        getAllMenu1();
      } catch (error) {}
      return;
  } else if (nextCategory === undefined) {
		try {
		 this.setState({ filter: false });
	     getAllMenu1();
      } catch (error) {}
      return;
	}
	 try {
	  getMenuItemsWithCategory(nextCategory);
    } catch (error) {}
  }

  handleCategoryChange = category => {
    this.setState({ filter: true });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  handleClearSelector = () => {
    const { history } = this.props;
    const { location } = this.props;
    this.setState({ filter: false });
    history.push({
      pathname: location.pathname,
      search: '',
    });
  };

  render() {
    const { filter } = this.state;
    const {
      menu,
      IdsMenu,
      loading,
      categories,
      error,
      addToCart,
      isAuthenticated,
    } = this.props;
    const currentCategory = getCategoryFromProps(this.props);
    return (
      <div>
        {isAuthenticated
          ? !loading && (
              <div className={s.addMenu}>
                <Link to={`${routes.MENU_ADD}`}>Добавить элемент меню</Link>
              </div>
            )
          : !loading && (
              <div className={s.greenText}>
                <span>
                  Для получения полного доступа к возможностям сервиса, пройдите
                  регистрацию (SignUp)
                </span>
              </div>
            )}
        <br />
        {!loading && (
          <CategorySelector
            options={categories}
            value={currentCategory}
            onChange={this.handleCategoryChange}
          />
        )}
        {filter && (
          <button type="button" onClick={this.handleClearSelector}>
            Убрать фильтр
          </button>
        )}
        {filter && (
          <p>Фильтр установлен на: {getCategoryFromProps(this.props)}</p>
        )}
        {loading && <Loader />}
        {error && <h1>Error</h1>}
        {menu.length > 0 && (
          <MenuGrid items={menu} IdsMenu={IdsMenu} addToCart={addToCart} />
        )}
      </div>
    );
  }
}
