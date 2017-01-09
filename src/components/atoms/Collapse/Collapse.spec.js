import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Collapse from './Collapse'

import { LIB_CONFIG } from './../../../constants';

/** @test {Collapse} */
describe('[Atom] Collapse', () => {

  // Collapse base CSS class
  const baseClass = LIB_CONFIG.prefix + 'collapse';

  /** @test {Button#render} */
  it('Collapsed state', () => {
    const wrapper = shallow(<Collapse />);

    expect(wrapper.type()).to.equal('div');
    expect(wrapper.find(`.${baseClass}__wrapper`)).to.have.length(1);

    expect(wrapper.prop('className')).to.contain(baseClass);
    expect(wrapper.prop('className')).to.contain(baseClass + '--animate');
  });

  /** @test {Button#render} */
  it('Expanded state and animation disabled', () => {
    const wrapper = shallow(<Collapse collapsed="true" animate="false" />);

    expect(wrapper.type()).to.equal('div');
    expect(wrapper.prop('className')).to.contain(baseClass);
    expect(wrapper.prop('className')).to.contain(baseClass + '--in');
    expect(wrapper.prop('className')).not.to.contain(baseClass + '--animate');
  });
});