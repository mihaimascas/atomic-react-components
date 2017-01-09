import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import {Button, Icon, List, ListItem} from 'atomic-react-components';

import styles from './styles/PrimaryNav.scss';

class PrimaryNav extends Component {
  static get propTypes() {
    return {
      navItems: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        url: React.PropTypes.string,
        icon: React.PropTypes.string
      })).isRequired
    };
  }

  static get defaultProps() {
    return {
      navItems: [{
        label: 'Home',
        url: '/'
      }]
    };
  }

  render() {
    const menuItems = this.props.navItems.map( (item, index) => {
      if (item.url) {
        return (
          <ListItem className="primary-nav__list-item">
            <Link key={index} activeClassName="primary-nav__link--active" to={item.url} className="primary-nav__link">
              <Icon type={item.icon || 'angle-right'} className="u--pull-xs-right primary-nav__link-icon" />
              <span className="primary-nav__link-label">{item.label}</span>
            </Link>
          </ListItem>
        );
      } else {
        return (
          <ListItem key={index} className="primary-nav__list-item primary-nav__list-item--title">
            <span className="primary-nav__link-label">{item.label}</span>
          </ListItem>
        );
      }
    });

    return (
      <nav className="primary-nav">
        <List unstyled className="primary-nav__list">
          {menuItems}
        </List>
      </nav>
    );
  }
}

export default PrimaryNav;
