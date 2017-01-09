/** @namespace AtomButton */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import except from 'except';


import buttonStyles from './Button.scss';
import buttonStylesRed from './Button--theme-red.scss';

import { LIB_CONFIG } from './../../../constants';

/**
 * Button base CSS class
 * @memberof AtomButton
 * @static
 */
const baseClass = LIB_CONFIG.prefix + 'button';

/**
 * @desc
 * Use the **Button** component to render instances of `<a>` or `<button>`.
 * Component accepts 3 properties:
 * * size: defines button size and spacing
 * * theme: defines visual aspect and weight
 * * type: display as `<a>` if type is `link` or `<button>` if type is `button`, `submit` or `reset`
 *
 * @example
 * <Button size="large" theme="primary" type="link">Label</Button>
 * <Button theme="secondaty" type="submit">Submit</Button>
 * @since 0.0.1
 * @see http://example.org
 */

class Button extends Component {
  /**
   * Parameters that are used by Button component
   * @property {string} [type='button'] - Values: 'link', **'button'**, 'submit', 'reset'.
   * @property {string} [size='medium'] - Values: 'small', **'medium'**, 'large'
   * @property {string} [theme='default'] - Values: 'primary', 'secondary', 'tertiary', **'default'**
   */
  static get propTypes() {
    return {
      type: React.PropTypes.oneOf(['link', 'button', 'submit', 'reset']),
      size: React.PropTypes.oneOf(['small', 'medium', 'large']),
      theme: React.PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'default']),
    };
  }

  /**
   * Default component props. See default values in propTypes definition.
   */
  static get defaultProps() {
    return {
      type: 'button',
      size: 'medium',
      theme: 'default'
    };
  }

  /**
   * Renders the component.
   *
   * @return {Object} rendered component
   */
  render() {
    const omit = Object.keys(Button.propTypes);
    const other = except(this.props, omit.push('className'));

    let buttonClassNames = classNames(this.props.className, baseClass, {
      [`${baseClass}--${this.props.theme}`]: this.props.theme,
      [`${baseClass}--size-${this.props.size}`]: this.props.size
    });

    if(this.props.type === 'link') {
      return (
        <a className={buttonClassNames} {...other}>{this.props.children}</a>
      );
    }

    return (
      <button type={this.props.type} className={buttonClassNames} {...other}>{this.props.children}</button>
    );
  }
}

export default Button;