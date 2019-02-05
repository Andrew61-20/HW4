import React, { Component } from 'react';
import * as API from '../services/api';
import MenuCategoryAdd from '../modules/menu/MenuCategoryAdd';
import s from '../modules/menu/MenuGrid.module.css';

const INITIAL_STATE = {
  category: '',
  name: '',
  description: '',
  image: '',
  price: '',
  ingredient: '',
};

export default class MenuAdd extends Component {
  state = {
    categories: [],
    ingredients: [],
    ...INITIAL_STATE,
  };

  async componentDidMount() {
    try {
      const categories = await API.getCategories();

      this.setState({ categories });
    } catch (error) {}
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleAddIngredient = (e, ingredient) => {
    e.preventDefault();
    this.setState({
      ingredients: [...this.state.ingredients, ingredient],
      ingredient: '',
    });
  };

  handleAddItem = inpValue => {
    API.addMenuItem(inpValue).then(responseInpValue => {
      if (!responseInpValue) return;
    });

    const { state } = this.props.location;
    this.setState({ ingredients: [] });
    if (state) {
      return this.props.history.push(state.from);
    }
    this.props.history.push('/menu');
  };

  render() {
    const {
      categories = [],
      ingredients = [],
      ingredient,
      category,
      name,
      description,
      image,
      price,
    } = this.state;
    return (
      <div>
        <h2>MenuAdd</h2>
        <form onSubmit={e => this.handleAddIngredient(e, ingredient)}>
          <input
            type="text"
            name="ingredient"
            value={ingredient}
            onChange={this.handleChange}
            placeholder="Название ингредиента"
          />
          <br />
          <button className={s.green} type="submit">
            Добавить ингредиент
          </button>
          <br />
          {ingredients.map(el => (
            <p key={el}>{el}</p>
          ))}
        </form>
        <form
          onSubmit={() =>
            this.handleAddItem({
              category,
              name,
              description,
              image,
              price,
            })
          }
        >
          <MenuCategoryAdd
            categories={categories}
            category={category}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Название блюда"
          />
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
            placeholder="Описание блюда"
          />
          <br />
          <input
            type="text"
            name="image"
            value={image}
            onChange={this.handleChange}
            placeholder="Ссылка на изображение"
          />
          <br />
          <input
            type="number"
            name="price"
            value={price}
            onChange={this.handleChange}
            placeholder="Цена блюда"
          />
          <br />
          <button className={s.green} type="submit">
            Добавить блюдо
          </button>
          <br />
        </form>
      </div>
    );
  }
}
