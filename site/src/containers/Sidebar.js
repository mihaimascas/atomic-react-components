import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import {Icon} from 'atomic-react-components';

import styles from './styles/Sidebar.scss';

class Sidebar extends Component {
  static get propTypes() {
    return {
      collapsed: React.PropTypes.bool
    };
  }

  static get defaultProps() {
    return {
      collapsed: false
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      isCollpased: this.props.collapsed
    };

    this._toggleSidebar = this._toggleSidebar.bind(this);
  }

  componentWillUpdate(nextProps) {
    this.setState({
      isCollpased: nextProps.collapsed
    })
  }

  _toggleSidebar(e) {
    this.setState({
      isCollpased: !this.state.isCollpased
    })
  }

  render() {
    let sidebarClassName = classNames('sidebar', {
      'sidebar--collapsed': this.state.isCollpased
    });

    return (
      <aside className={sidebarClassName}>
        <div className="sidebar__wrapper">
          <Link to="/" className="sidebar__brand">
            <h1>Atomic React Components</h1>
          </Link>

          <div className="sidebar__content">
            {this.props.children}
          </div>
        </div>
      </aside>
    );

  }
}

export default Sidebar;
