// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


// import React from "react";
// import Enzyme, { shallow, render, mount } from "enzyme";
// import { createSerializer } from "enzyme-to-json";
// import sinon from "sinon";