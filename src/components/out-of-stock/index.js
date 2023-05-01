/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

class OutOfStock extends React.PureComponent {
  render() {
    return (
      <div className="product-out-of-stock">
        <div className="product-illustration">
          <span>Out of stock</span>
        </div>
        <div className="text-info">
          <span className="title">Apollo Running Short</span>
          <span className="price">$50.00</span>
        </div>
      </div>
    );
  }
}

export default OutOfStock;
