import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import except from 'except';

import inputStyles from './Input.scss'

class Input extends Component {
  render() {
    const omit = Object.keys(Input.propTypes);
    const other = except(this.props, omit);

    let InputClassNames = classNames(this.props.className, 'ms-input', {
      'ms-input--large': this.props.size && this.props.size === 'large',
      'ms-input--small': this.props.size && this.props.size === 'small'
    });

    return (
      <input className={InputClassNames}  {...other} />
    );
  }
}

Input.propTypes = {
  size: React.PropTypes.oneOf(['large', 'small', 'default']),
  className: React.PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  size: 'default',
  className: ''
};

export default Input;