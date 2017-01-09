/** @namespace AtomIcon */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import except from 'except';


import iconStyles from './Icon.scss';

import { LIB_CONFIG } from './../../../constants';

/**
 * Icon base CSS class
 * @static
 */
const baseClass = LIB_CONFIG.prefix + 'icon';

/**
 * @desc
 * Use the **Icon** component to render specific icons anywhere in the content.
 * Component accepts 4 properties:
 * * size: defines icons size
 * * type: defines what icon to display
 * * fixedWidth: enables fixed width for the icon element
 * * spin: enables spin animation on icon
 *
 * @example
 * <Icon size="large" type="arrow" fixedWidth="true" spin="true" />
 * @since 0.3.0
 * @see http://example.org
 */

class Icon extends Component {
  /**
   * Parameters that are used by Icon component
   * @property {string} [type='angle-right'] - Supported icons: http://themify.me/themify-icons
   * @property {number} [size=1] - Values range 1-5. 'x' times font size (e.g.: size 3 => font-size: 3em)
   * @property {boolean} [fixedWidth=false] - enables fixed width for the icon element
   * @property {boolean} [spin=false] - enables spin animation on icon
   */
  static get propTypes() {
    return {
      type: React.PropTypes.string.isRequired,
      size: React.PropTypes.oneOf(['1', 1, '2', 2, '3', 3, '4', 4, '5', 5]),
      fixedWidth: React.PropTypes.bool,
      spin: React.PropTypes.bool,
      className: React.PropTypes.string
    };
  }

  /**
   * Default component props. See default values in propTypes definition.
   */
  static get defaultProps() {
    return {
      type: 'angle-right',
      size: 1,
      fixedWidth: false,
      spin: false
    };
  }

  /**
   * Renders the component.
   *
   * @return {Object} rendered component
   */
  render() {
    const omit = Object.keys(Icon.propTypes);
    const other = except(this.props, omit);
    // CSS class name safe string
    const typeClass = this.props.type.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');

    let iconClassNames = classNames(this.props.className, baseClass, `${baseClass}--${typeClass}`, {
      [`${baseClass}--size-${this.props.size}`]: this.props.size > 1 && this.props.size < 6,
      [`${baseClass}--fixed-width`]: this.props.fixedWidth,
      [`${baseClass}--spin`]: this.props.spin
    });

    return (
      <span className={iconClassNames} {...other}>

      </span>
    );
  }
}

export default Icon;