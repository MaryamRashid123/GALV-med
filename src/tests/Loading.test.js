
import Loading from '../components/Loading';

import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

describe('Loading Test', () => {
  it('Text in loading component div', () => {
    const wrapper = shallow(<Loading />);
    const div = wrapper.find('div');
    expect(div.text()).toBe('Loading');
  });
});