/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { Icon } from '../';

class Button extends React.PureComponent {
  render() {
    const { type, onClick, disabled, label, size, icon, name, width, height } = this.props;

    const setClassName = () => {
      let str = `button-root ${sizes[size].class}`;
      if (type) {
        str += ` ${types[type]}`;
      }

      return str;
    };

    return (
      <button type={type} onClick={onClick} disabled={disabled} className={setClassName()}>
        {label && <span>{label}</span>}
        {icon && <Icon name={name} width={width} height={height} />}
      </button>
    );
  }
}

const sizes = {
  small: {
    class: 'small',
    width: 43,
    height: 43,
  },
  medium: {
    class: 'medium',
    width: 118,
    height: 43,
  },
  large: {
    class: 'large',
    width: 292,
    height: 43,
  },
  none: {
    class: 'none',
    width: 'auto',
    height: 20,
  },
};

const types = {
  default: 'default',
  outlined: 'outlined',
  header: 'header',
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'none']),
  type: PropTypes.oneOf(['default', 'outlined', 'header']),
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  icon: PropTypes.bool,
};

Button.defaultProps = {
  size: 'small',
  type: 'default',
  label: null,
  onClick: () => {},
  disabled: false,
  name: null,
  width: '10px',
  height: '10px',
  icon: false,
};

export default Button;
