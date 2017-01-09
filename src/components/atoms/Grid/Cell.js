import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import except from 'except';

import labelStyles from './Cell.scss'

class Cell extends Component {

  _generateSizeClass(size) {
    let sizes = size.replace(/  +/g, ' ').split(' ');

    return sizes.map((s) => {
      let _s = s.split(':');

      if (_s.length > 1) {
        return 'ms-cell--' + _s[0] + '-' + _s[1].toLowerCase()
      }
    })
  }

  render() {
    const omit = Object.keys(Cell.propTypes);
    const other = except(this.props, omit.push('className'));

    let cellSizeClass = this._generateSizeClass(this.props.cellSize);

    let cellClassName = classNames(this.props.className, 'ms-cell', cellSizeClass);

    return(
      <div className={cellClassName} {...other}>{this.props.children}</div>
    );
  }
}

Cell.propTypes = {
  cellSize: React.PropTypes.string
};

Cell.defaultProps = {
  cellSize: '1:XS'
};

export default Cell;
