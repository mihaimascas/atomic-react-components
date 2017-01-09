import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Label from './Label'

describe('[Atom] Label', () => {
  it('Has correct default markup', () => {
    const wrapper = shallow(<Label>Placeholder</Label>);

    expect(wrapper.type()).to.equal('label');
    expect(wrapper.prop('className')).to.equal('ms-label');
    expect(wrapper.text()).to.equal('Placeholder');
  });
});