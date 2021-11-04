import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

import Dashboard from '../components/Pages/Dashboard/Dashboard'

let wrapped = shallow(<Dashboard title="Dashboard"/>);
describe('dashboard', () => {
  it('should render the Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  
});