import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Row from './Row'

describe('[Atom] Row (grid row)', () => {
  it('Has correct default markup', () => {
    const wrapper = shallow(<Row>...</Row>);

    expect(wrapper.type()).to.equal('div');
    expect(wrapper.prop('className')).to.equal('ms-row');
  });
});