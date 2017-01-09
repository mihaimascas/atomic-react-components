/** @namespace AtomList */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import except from 'except';


import listStyles from './List.scss';

import { LIB_CONFIG } from './../../../constants';

/**
 * List base CSS class
 * @memberof AtomList
 * @static
 */
const baseClass = LIB_CONFIG.prefix + 'list';

/**
 * @desc
 * Use the **List** component to render list wrappers. E.g.: `<ul>`, `<ol>`
 *
 * @example
 * <List type="ordered" className="mixin-class-name" unstyled inline>
 *    <ListItem>...</ListItem>
 * </List>
 *
 * @since 0.3.0
 * @see http://example.org
 */
class List extends Component {
  /**
   * Parameters that are used by List component
   * @property {string} [type='unordered'] - Values: **'unordered'**, 'ordered'.
   * @property {boolean} [unstyled=false] - removes list default styling (margin, bullets).
   * @property {boolean} [inline=false] - enables inline list items
   * @property {string} [className] - CSS mixin class name
   * @property {node} children - List item nodes
   */
  static get propTypes() {
    return {
      type: React.PropTypes.oneOf(['unordered', 'ordered']),
      unstyled: React.PropTypes.bool,
      inline: React.PropTypes.bool,
      className: React.PropTypes.string,
      children: React.PropTypes.node.isRequired
    };
  }

  /**
   * Default component props. See default values in propTypes definition.
   */
  static get defaultProps() {
    return {
      type: 'unordered',
      unstyled: false,
      inline: false,
      className: ''
    };
  }

  /**
   * Renders the component.
   *
   * @return {Object} rendered component
   */
  render() {
    const other = except(this.props, Object.keys(List.propTypes));
    const tagName = this.props.type === 'ordered' ? 'ol' : 'ul';

    let listClassNames = classNames(this.props.className, baseClass, {
      [`${baseClass}--${this.props.type}`]: this.props.type !== 'unordered',
      [`${baseClass}--unstyled`]: this.props.unstyled,
      [`${baseClass}--inline`]: this.props.inline
    });

    return React.createElement(tagName, { className: listClassNames, ...other }, this.props.children);
  }
}

export default List;