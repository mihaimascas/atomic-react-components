import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import except from 'except';

import labelStyles from './Label.scss'

class Label extends Component {
  render() {
    const omit = Object.keys(Label.propTypes);
    const other = except(this.props, omit.push('className'));

    let labelClassName = classNames(this.props.className, 'ms-label');

    return(
      <label className={labelClassName} {...other}>{this.props.children}</label>
    );
  }
}

Label.propTypes = {};

Label.defaultProps = {
};

export default Label;
