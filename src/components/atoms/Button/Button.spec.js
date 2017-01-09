import { expect } from 'chai';
import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import Button from './Button';

import { LIB_CONFIG } from './../../../constants';

/** @test {Button} */
describe('[Atom] Button', () => {

  /** Button base CSS class */
  const baseClass = LIB_CONFIG.prefix + 'button';

  /** @test {Button#render} */
  it('renders as a <button>', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.type()).to.equal('button');
  });

  /** @test {Button#render} */
  it('renders as a <a>', () => {
    const wrapper = shallow(<Button type="link" href="#test"/>);
    expect(wrapper.type()).to.equal('a');
    expect(wrapper.prop('href')).to.equal('#test');
  });

  /** @test {Button#render} */
  it('On click behaviour', () => {
    const onClickHandler = sinon.spy();
    const wrapper = mount(<Button type="link" href="#test" onClick={onClickHandler}>Label</Button>);

    wrapper.simulate('click');
    expect(onClickHandler).to.have.property('callCount', 1);
  });

  /** @test {Button#render} */
  it('Default: Has correct markup', () => {
    const wrapper = shallow(<Button type="submit">text</Button>);
    const className = wrapper.prop('className');

    expect(wrapper.type()).to.equal('button');
    expect(className).to.contains(baseClass);
    expect(className).to.contains(baseClass + '--size-medium');
    expect(className).to.contains(baseClass + '--default');
    expect(wrapper.props().type).to.contains('submit');
    expect(wrapper.text()).to.equal('text');
  });

  /** @test {Button#render} */
  it('Large: Has correct markup', () => {
    const wrapper = shallow(<Button type="submit" size="large" theme="primary">text</Button>);
    const className = wrapper.prop('className');

    expect(wrapper.type()).to.equal('button');
    expect(className).to.contains(baseClass);
    expect(className).to.contains(baseClass + '--size-large');
    expect(className).to.contains(baseClass + '--primary');
    expect(wrapper.props().type).to.equal('submit');
    expect(wrapper.text()).to.equal('text');
  });

  /** @test {Button#render} */
  it('Medium: Has correct markup', () => {
    const wrapper = shallow(<Button type="submit" size="medium" theme="secondary">text</Button>);
    const className = wrapper.prop('className');

    expect(wrapper.type()).to.equal('button');
    expect(className).to.contains(baseClass);
    expect(className).to.contains(baseClass + '--size-medium');
    expect(className).to.contains(baseClass + '--secondary');
    expect(wrapper.props().type).to.equal('submit');
    expect(wrapper.text()).to.equal('text');
  });

  /** @test {Button#render} */
  it('Small: Has correct markup', () => {
    const wrapper = shallow(<Button type="submit" size="small" theme="secondary">text</Button>);
    const className = wrapper.prop('className');

    expect(wrapper.type()).to.equal('button');
    expect(className).to.contains(baseClass);
    expect(className).to.contains(baseClass + '--size-small');
    expect(className).to.contains(baseClass + '--secondary');
    expect(wrapper.props().type).to.equal('submit');
    expect(wrapper.text()).to.equal('text');
  });
});