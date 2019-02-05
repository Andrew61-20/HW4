import React, { Component, createRef } from 'react';
import s from '../modules/menu/MenuGrid.module.css';

export default class OrderModal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (e.target !== this.backdropRef.current) return;
    this.props.onClose();
  };

  render() {
    const { item, onClose } = this.props;
    return (
      <div
        className="Backdrop"
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className="OrderModal">
          <p>Date: {item.date}</p>
          <p>Price: {item.price}</p>
          <p>Address: {item.address}</p>
          <p>Rating: {item.raiting}</p>
          <button type="button" className={s.red} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
