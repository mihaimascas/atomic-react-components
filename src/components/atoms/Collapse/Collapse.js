import React, { Component } from 'react';
import classNames from 'classnames';
import except from 'except';

import collapseStyles from './Collapse.scss'

import { LIB_CONFIG } from './../../../constants';

/**
 * Collapse base CSS class
 */
const baseClass = LIB_CONFIG.prefix + 'collapse';

/**
 * @desc
 * Basic collapsable area. Use the **Collapse** component to Show and hide pars of the content.
 * Can be used in higher level components like: accordions, drop-down and more.
 *
 * Component accepts 3 properties:
 * * collapsed: true / false
 * * animate: true/ false defines if collapse and expand will be animated
 *
 * @example
 * <Collapse collapsed={true} animate={true}><ul> ... </ul></Collapse>
 * @since 0.0.1
 */

class Collapse extends Component {
  /**
   * Parameters that are used by Collapse component
   * @property {boolean} [collapse=true] - Is area collapsed?
   * @property {boolean} [animate=true] - Animate colapse/expand
   */
  static get propTypes() {
    return {
      collapsed: React.PropTypes.bool,
      animate: React.PropTypes.bool
    };
  }

  /**
   * Default component props. See default values in propTypes definition.
   */
  static get defaultProps() {
    return {
      collapsed: true,
      animate: true
    };
  }

  /**
   * Renders the component.
   *
   * @memberof Collapse
   * @return {Object} rendered component
   */
  render() {
    const omit = Object.keys(Collapse.propTypes);
    const other = except(this.props, omit.push('className'));

    let collapseClassNames = classNames(this.props.className, baseClass, {
      [`${baseClass}--in`]: this.props.collapsed !== true,
      [`${baseClass}--animate`]: this.props.animate === true
    });

    return (
      <div className={collapseClassNames} {...other}>
        <div className={baseClass + "__wrapper"}>{this.props.children}</div>
      </div>
    );
  }
}

export default Collapse;