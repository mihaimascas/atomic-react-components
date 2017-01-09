import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import except from 'except';

import rowStyles from './Row.scss'

class Row extends Component {

  render() {
    const other = except(this.props, ['className']);

    let rowClassName = classNames(this.props.className, 'ms-row');

    return(
      <div className={rowClassName} {...other}>{this.props.children}</div>
    );
  }
}

Row.propTypes = {
};

Row.defaultProps = {
};

export default Row;
