/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

class InStock extends React.PureComponent {
  render() {
    return (
      <div className="product-in-stock">
        <div className="product-illustration" />
        <div className="text-info">
          <span className="title">Apollo Running Short</span>
          <span className="price">$50.00</span>
        </div>
      </div>
    );
  }
}

export default InStock;
