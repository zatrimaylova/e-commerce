/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import icons from './icons-list';

class Icon extends React.PureComponent {
  render() {
    const { name, width, height, fill } = this.props;
    return icons[name]?.renderIcon({
      width: width,
      height: height,
      fill: fill,
    });
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

Icon.defaultProps = {
  name: '',
  width: '16px',
  type: '16px',
  fill: '#000000',
};

export default Icon;
