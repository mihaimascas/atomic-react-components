import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Cell from './Cell'

describe('[Atom] Grid (grid cell)', () => {
  it('Has correct default markup', () => {
    const wrapper = shallow(<Cell>...</Cell>);

    expect(wrapper.type()).to.equal('div');
    expect(wrapper.prop('className')).to.equal('ms-cell ms-cell--1-xs');
  });

  it('Has correct breakpoint modifiers', () => {
    const wrapper = shallow(<Cell cellSize="6:XS 5:S 4:M 3:L 2:XL">...</Cell>);

    expect(wrapper.type()).to.equal('div');
    expect(wrapper.prop('className')).to.equal('ms-cell ms-cell--6-xs ms-cell--5-s ms-cell--4-m ms-cell--3-l ms-cell--2-xl');
  });

  it('Has correct set of breakpoint modifiers', () => {
    const wrapper = shallow(<Cell cellSize="6:XS 4:M 3:XL">...</Cell>);

    expect(wrapper.type()).to.equal('div');
    expect(wrapper.prop('className')).to.equal('ms-cell ms-cell--6-xs ms-cell--4-m ms-cell--3-xl');
  });
});