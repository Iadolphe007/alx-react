import React from "react";
import Login from "./Login";
import {shallow} from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Login Test', () => {
    it('login renders without crashing', () => {
        const wrapper = shallow(<Login />)
        expect(wrapper.exists()).toEqual(true);
    });

    it('component render 2 input and label', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).find('input').toHaveLength(2);
        expect(wrapper).find('label').toHaveLength(2);
    }); 
});