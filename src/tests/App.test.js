//import { render, screen } from '@testing-library/react';
import App from '../App';

import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

describe('App.js Test', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    const div = wrapper.find('.App');
    expect(div.length).toBe(1);
  });
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
