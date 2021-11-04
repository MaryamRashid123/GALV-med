import App from '../App';

import EmptyData from '../components/Common/EmptyData';

import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

describe('EmptyTest.js Test', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<EmptyData />);
    const div = wrapper.find('p');
    expect(div.length).toBe(1);
  });
});