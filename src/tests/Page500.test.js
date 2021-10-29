
import Page500 from '../components/ErrorPages/Page500';

import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

describe('Error 500 Test', () => {
  it('Text in Page 500 component div', () => {
    const wrapper = shallow(<Page500 />);
    const div = wrapper.find('h2');
    expect(div.text()).toBe('500');
  });
});