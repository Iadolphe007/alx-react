import { shallow } from "enzyme";
import React from "react";
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe('Testing new component', () => {
    it('component renders children and h2 element', () => {
        const wrapper = shallow(<BodySection />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('h2').exists).toBe(true);
        expect(wrapper.find("h2").html()).toEqual("<h2>test title</h2>");
        expect(wrapper.find('h2').exists()).toBe(true);
        expect(wrapper.find('p').text()).toEqual('test children node');
    });
})