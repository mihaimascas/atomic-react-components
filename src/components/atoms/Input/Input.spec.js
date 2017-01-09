import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from './Input'

describe('[Atom] Input', () => {
  it('Has correct default markup', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.type()).to.equal('input');
    expect(wrapper.prop('className')).to.equal('ms-input');
    expect(wrapper.prop('type')).to.equal('text');
  });

  it('Large input: Has correct markup', () => {
    const wrapper = shallow(<Input size="large" type="email" />);

    expect(wrapper.type()).to.equal('input');
    expect(wrapper.prop('className')).to.equal('ms-input ms-input--large');
    expect(wrapper.prop('type')).to.equal('email');
  });

  it('Small input: Has correct markup', () => {
    const wrapper = shallow(<Input size="small" type="password" />);

    expect(wrapper.type()).to.equal('input');
    expect(wrapper.prop('className')).to.equal('ms-input ms-input--small');
    expect(wrapper.prop('type')).to.equal('password');
  });
});