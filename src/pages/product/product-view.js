/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

import { Header } from '../../components';
import { Button } from '../../ui-kit';

class ProductListingView extends React.PureComponent {
  render() {
    const renderColor = (color) => ({
      color,
    });

    return (
      <div id="--product-page">
        <Header />
        <div className="container">
          <div className="photos">
            <div className="carousell">
              <div />
              <div />
              <div />
            </div>
            <div className="view" />
          </div>
          <div className="description">
            <div className="title">
              <span>Apollo</span>
              <span>Running Short</span>
            </div>
            <div className="characteristics">
              <div>
                <span>SIZE:</span>
                <div className="sizes">
                  <Button label="XS" type="outlined" />
                  <Button label="S" type="outlined" />
                  <Button label="M" type="outlined" />
                </div>
              </div>
              <div>
                <span>COLOR:</span>
                <div className="colors">
                  <div style={renderColor('#492f7d')} />
                  <div style={renderColor('#403b4a')} />
                  <div style={renderColor('#615224')} />
                </div>
              </div>
              <div className="price">
                <span>PRICE:</span>
                <span>$50.00</span>
              </div>
            </div>
            <p className="text">
              Find stunning women's cocktail dresses and party dresses. Stand out in lace and
              metallic cocktail dresses and party dresses from all your favorite brands.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListingView;
