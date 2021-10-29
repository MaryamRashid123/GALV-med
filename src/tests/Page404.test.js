
import Page404 from '../components/ErrorPages/Page404';

import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

describe('Error 404 Test', () => {
  it('Text in Page 404 component div', () => {
    const wrapper = shallow(<Page404 />);
    const div = wrapper.find('h2');
    expect(div.text()).toBe('404');
  });
});