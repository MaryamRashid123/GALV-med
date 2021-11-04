
import Login from '../components/Pages/Login'
import { Provider } from 'react-redux';
import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import configureStore from '../store/configureStore';
import * as reactRedux from 'react-redux'
import sinon from 'sinon';
import Auth from '../store/reducers/AuthReducer';

const setUp = () => {
  const store = configureStore();
  const wrapper = shallow(<Provider store={store}><Login /></Provider> ).childAt(0).dive();
 
  return wrapper;
};

describe('Login Test', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  
  let wrapper;
  beforeEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
    useSelectorMock.mockReturnValue({ loading:false, error: false });
    wrapper = setUp();
  });

  it('Login renders without crashing', () => {
    const div = wrapper.find('h3');
    expect(div.length).toBe(1);
  });

  it('updates Reducer states based on action type', () => {
    const requestState= Auth({}, {type:'LOGIN_REQUEST'})
    expect(requestState).toEqual({loading: true, error: false});

    const successState= Auth({}, {type:'LOGIN_SUCCESS'})
    expect(successState).toEqual({loading: false, error: false});
  });

  // it('calls function on button click', () => { 
  //   const logSpy = jest.spyOn(console, 'log');
  //   const button = wrapper.find('button');
  //   button.simulate('click');
  //   expect(logSpy).toHaveBeenCalledTimes(1); 
  // });
});
