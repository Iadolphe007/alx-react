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

describe("test for submit input on form", () => {
  it("verify that the submit button is disabled by default", () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it("verify that after changing the value of the two inputs, the button is enabled", () => {
    const wrapper = shallow(<Login />);

    wrapper.find("#email").simulate("change", { target: { value: "t" } });
    wrapper.find("#password").simulate("change", { target: { value: "t" } });
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });
});