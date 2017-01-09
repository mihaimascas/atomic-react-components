import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Dropdown from './Dropdown'

describe('[Molecule] Dropdown', () => {
  it('Click behaviour', () => {
    const wrapper = mount(<Dropdown buttonLabel="Test button" >Test content</Dropdown>);

    expect(wrapper.state('collapsed')).to.eqls(true);

    wrapper.find('.arc-button').simulate('click');
    expect(wrapper.state('collapsed')).to.eqls(false);

    wrapper.find('.arc-button').simulate('click');
    expect(wrapper.state('collapsed')).to.eqls(true);
  });
});