import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App compent testing', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });

  it('App renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("App-header")).toBeDefined();
  });

  it('App renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("App-body")).toBeDefined();
  });

  it('App renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("App-footer")).toBeDefined();
  });
})