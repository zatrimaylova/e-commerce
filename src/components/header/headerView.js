/**
 * @prettier
 */

import React from 'react';

import { Button } from '../../ui-kit';

class HeaderView extends React.PureComponent {
  render() {
    return (
      <header id="--header">
        <div className="container">
          <nav>
            <ul>Women</ul>
            <ul>Men</ul>
            <ul>Kids</ul>
          </nav>
          <div className="logo" />
          <div className="cart-info">
            <Button label="$" type="icon" />
            <Button type="icon" />
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderView;
