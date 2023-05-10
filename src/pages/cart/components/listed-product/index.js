/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

//import { Header } from '../../components';
import { Button } from '../../../../ui-kit';

class ListedProduct extends React.PureComponent {
  render() {
    const renderColor = (color) => ({
      color,
    });

    return (
      <div className="listed-product">
        <div className="description">
          <div className="text-description">
            <span className="name">Apollo</span>
            <span className="type">Running Short</span>
            <span className="price">$50.00</span>
          </div>
          <div className="characteristics">
            <div className="size-info">
              <span>SIZE:</span>
              <div className="sizes">
                <Button label="XS" type="outlined" />
                <Button label="S" type="outlined" />
                <Button label="M" type="outlined" />
              </div>
            </div>
            <div className="color-info">
              <span>COLOR:</span>
              <div className="colors">
                <div style={renderColor('#492f7d')} />
                <div style={renderColor('#403b4a')} />
                <div style={renderColor('#615224')} />
              </div>
            </div>
          </div>
        </div>
        <div className="cart-photos">
          <div className="counter">
            <Button type="outlined" label="+" />
            <div>
              <p>1</p>
            </div>
            <Button type="outlined" label="-" />
          </div>
          <div className="photos-viewer">
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default ListedProduct;
