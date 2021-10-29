import React from 'react';
import { shallow } from 'enzyme';
//import Title from './Title';
import Dashboard from '../components/Layouts/Dashboard/Dashboard'

let wrapped = shallow(<Dashboard title="Dashboard"/>);
describe('dashboard', () => {
  it('should render the Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  
});