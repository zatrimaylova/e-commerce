/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

import { Button } from '../../ui-kit';

class Header extends React.PureComponent {
  render() {
    return (
      <header id="--header">
        <div className="container">
          <div className="holder">
            <nav>
              <ul>Women</ul>
              <ul>Men</ul>
              <ul>Kids</ul>
            </nav>
            <div className="logo" />
          </div>
          <div className="cart-info">
            <Button
              label="$"
              icon={true}
              size="none"
              name="select"
              height="4px"
              width="8px"
              type="none"
            />
            <Button
              size="none"
              icon={true}
              fill="#43464E"
              name="cart"
              height="18px"
              width="20px"
              type="none"
            />
          </div>
        </div>
        <div className="currency-list">
          <ul>
            <li>$ USD</li>
            <li>€ EUR</li>
            <li>¥ JPY</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
