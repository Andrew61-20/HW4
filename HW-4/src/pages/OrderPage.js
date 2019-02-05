import React, { Component } from 'react';
import OrderList from './OrderList';
import s from '../modules/menu/MenuGrid.module.css';
import * as API from '../services/api.js';
import OrderModal from './OrderModal';

const today = new Date();

const INITIAL_STATE = {
  price: '',
  address: '',
  raiting: '',
  showMoreInfo: 0,
  isModalOpen: false,
  isLoading: false,
};

export default class OrderPage extends Component {
  state = {
    ...INITIAL_STATE,
    orderlist: [],
    date:
      `${today.getMonth() + 1  }/${  today.getDate()  }/${  today.getFullYear()}`,
  };

  componentDidMount() {
    API.getAllOrderItems().then(orderlist => {
      this.setState({ orderlist });
    });
  }

  handleShowMoreInfo = id => {
    this.setState({ isLoading: true });
    API.getOrderItemById(id).then(item => {
      this.setState(state => ({
        showMoreInfo: item,
        isModalOpen: true,
        isLoading: false,
      }));
    });
  };

  handleDeleteItem = id => {
    API.deleteOrderItem(id).then(isOk => {
      if (!isOk) return;
      this.setState(state => ({
        orderlist: state.orderlist.filter(item => item.id !== id),
      }));
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddItem = (inpValue, e) => {
    e.preventDefault();
    API.addOrderItem(inpValue).then(responseInpValue => {
      this.setState(prevState => ({
        orderlist: [...prevState.orderlist, responseInpValue],
      }));
    });
  };

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      orderlist,
      date,
      price,
      address,
      raiting,
      showMoreInfo,
      isModalOpen,
      isLoading,
    } = this.state;
    return (
      <div>
        <OrderList
          items={orderlist}
          onShowMoreInfo={this.handleShowMoreInfo}
          onDelete={this.handleDeleteItem}
        />
        {isModalOpen && (
          <OrderModal item={showMoreInfo} onClose={this.closeModal} />
        )}
        {isLoading && <p className="Load">LOADING...</p>}
        <form
          onSubmit={e =>
            this.handleAddItem({ date, price, address, raiting }, e)
          }
        >
          <input
            type="number"
            name="price"
            value={price}
            onChange={this.handleChange}
            placeholder="Price"
          />
          <br />
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
            placeholder="Address"
          />
          <br />
          <input
            type="number"
            name="raiting"
            value={raiting}
            onChange={this.handleChange}
            placeholder="Raiting"
          />
          <br />
          <button className={s.green} type="submit">
            Add history
          </button>
          <br />
        </form>
        <br />
        <br />
      </div>
    );
  }
}
