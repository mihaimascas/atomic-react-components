import React, { Component } from 'react';
import Button from '../../atoms/Button/Button';
import Collapse from '../../atoms/Collapse/Collapse';

import dropdownStyles from './Dropdown.scss';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: !props.isOpen
    };

    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(event) {
    const currentState = this.state.collapsed;

    this.setState({
      collapsed: !currentState
    });
  }

  render() {
    return (
      <div className="ms-dropdown">
        <Button type="button" size={this.props.buttonSize} theme={this.props.buttonTheme} onClick={this._clickHandler}>{this.props.buttonLabel}</Button>
        <Collapse className="ms-dropdown__collapse" collapsed={this.state.collapsed}>
          {this.props.children}
        </Collapse>
      </div>
    );
  }
}

Dropdown.propTypes = {
  buttonLabel: React.PropTypes.string.isRequired,
  buttonSize: React.PropTypes.oneOf(['large', 'small', 'default']),
  buttonTheme: React.PropTypes.oneOf(['primary', 'secondary', 'default']),
  isOpen: React.PropTypes.bool
};

Dropdown.defaultProps = {
  buttonLabel: '',
  buttonSize: 'default',
  buttonTheme: 'default',
  isOpen: false
};

export default Dropdown;