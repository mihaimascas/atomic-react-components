import { expect } from 'chai';
import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import Icon from './Icon';

import { LIB_CONFIG } from './../../../constants';

/** @test {Icon} */
describe('[Atom] Icon', () => {

  /** Icon base CSS class */
  const baseClass = LIB_CONFIG.prefix + 'icon';

  const iconWrapper = shallow(<Icon size="2" type="arrow-right" fixedWidth="true" spin="true" className="mixin-class-name" />);
  const className = iconWrapper.prop('className');

  /** @test {Icon#render} */
  it('renders as a span', () => {
    expect(iconWrapper.type()).to.equal('span');
  });

  /** @test {Icon#render} */
  it('has type class', () => {
    expect(className).to.contains(baseClass + '--arrow-right');
  });

  /** @test {Icon#render} */
  it('has size class', () => {
    expect(className).to.contains(baseClass + '--size-2');
  });

  /** @test {Icon#render} */
  it('has fixed width class', () => {
    expect(className).to.contains(baseClass + '--fixed-width');
  });

  /** @test {Icon#render} */
  it('has spin animate class', () => {
    expect(className).to.contains(baseClass + '--spin');
  });

  /** @test {Icon#render} */
  it('has mixin class names added', () => {
    expect(className).to.contains('mixin-class-name');
  });
});