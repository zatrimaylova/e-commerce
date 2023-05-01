/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

import { Header, InStock, OutOfStock } from '../../components';

class ProductListingView extends React.PureComponent {
  render() {
    return (
      <div id="--product-listing-page">
        <Header />
        <div className="container">
          <p>Category name</p>
          <div className="products-list">
            <InStock />
            <InStock />
            <InStock />
            <InStock />
            <InStock />
            <OutOfStock />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListingView;
