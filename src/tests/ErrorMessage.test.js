import App from '../App';

import ErrorMessage from '../components/Common/ErrorMessage';

import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

describe('ErrorMessage.js Test', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ErrorMessage />);
    const div = wrapper.find('div');
    expect(div.length).toBe(0);
  });
});