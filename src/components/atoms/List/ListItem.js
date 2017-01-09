/** @namespace AtomListItem */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import except from 'except';

import { LIB_CONFIG } from './../../../constants';

/**
 * List Item base CSS class
 * @memberof AtomListItem
 * @static
 */
const baseClass = LIB_CONFIG.prefix + 'list__item';

/**
 * @desc
 * Use the **ListItem** component to render list items: `<li>`
 *
 * @example
 * <List type="ordered" className="mixin-class-name">
 *    <ListItem>...</ListItem>
 * </List>
 *
 * @since 0.3.0
 * @see http://example.org
 */

class ListItem extends Component {
  /**
   * Parameters that are used by List component
   * @property {string} [className] - CSS mixin class name
   */
  static get propTypes() {
    return {
      className: React.PropTypes.string,
    };
  }

  /**
   * Default component props. See default values in propTypes definition.
   */
  static get defaultProps() {
    return {
      className: ''
    };
  }

  /**
   * Renders the component.
   *
   * @return {Object} rendered component
   */
  render() {
    const other = except(this.props, Object.keys(ListItem.propTypes));

    let listItemClassNames = classNames(this.props.className, baseClass);

    return (
      <li className={listItemClassNames} {...other}>{this.props.children}</li>
    );
  }
}

export default ListItem;