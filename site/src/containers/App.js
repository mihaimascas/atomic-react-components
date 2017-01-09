import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Sidebar from './Sidebar';
import SidebarToggle from './SidebarToggle';
import PrimaryNav from './PrimaryNav';

import { SITE_CONFIG } from './../constants';

import styles from './styles/App.scss';

class App extends Component {
  static get propTypes() {
    return {
      sidebarCollapsed: React.PropTypes.bool
    };
  }

  static get defaultProps() {
    return {
      sidebarCollapsed: false
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      sideBarActive: !this.props.sidebarCollapsed
    };

    this._onSidebarToggle = this._onSidebarToggle.bind(this);
  }

  _onSidebarToggle(e) {
    e.preventDefault();

    this.setState({
      sideBarActive: !this.state.sideBarActive
    });
  }

  render () {
    return (
      <div className="page__wrapper">
        <SidebarToggle onClick={this._onSidebarToggle} collapsed={!this.state.sideBarActive} />
        <Sidebar collapsed={!this.state.sideBarActive} >
          <PrimaryNav navItems={SITE_CONFIG.navItems}/>
        </Sidebar>
        <div className={classNames('page__body', {'page__body--full-width': !this.state.sideBarActive})}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
