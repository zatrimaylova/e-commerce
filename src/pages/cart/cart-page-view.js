/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

import { Header } from '../../components';
import { Button } from '../../ui-kit';
import { ListedProduct } from './components';

class CartPageView extends React.PureComponent {
  render() {
    return (
      <div id="--cart-page">
        <Header />
        <div className="container">
          <h1>Cart</h1>
          <div>
            <ListedProduct />
            <ListedProduct />
          </div>
          <div>
            <div className="price-details">
              <div className="price-categories">
                <p>Tax 21%:</p>
                <p>Quantity:</p>
                <p>Total:</p>
              </div>
              <div className="price-info">
                <p>$42.00</p>
                <p>3</p>
                <p>$200.00</p>
              </div>
            </div>
            <Button label="ORDER" type="default" />
          </div>
        </div>
      </div>
    );
  }
}

export default CartPageView;
