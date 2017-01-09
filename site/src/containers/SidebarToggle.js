import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import {Icon} from 'atomic-react-components';

import styles from './styles/SidebarToggle.scss';

class SidebarToggle extends Component {
  static get propTypes() {
    return {
      collapsed: React.PropTypes.bool,
      onClick: React.PropTypes.func
    };
  }

  static get defaultProps() {
    return {
      collapsed: false,
      onClick: () => {}
    };
  }

  render() {
    let className = classNames('sidebar-toggle', {
      'sidebar-toggle--collapsed': this.props.collapsed
    });

    return (
      <a className={className} onClick={this.props.onClick}>
        <Icon key="1" type="menu" className="sidebar-toggle__icon sidebar-toggle__icon--collapsed" />
        <Icon key="2" type="arrow-left" className="sidebar-toggle__icon" />
      </a>
    );
  }
}

export default SidebarToggle;
