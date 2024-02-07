import React from "react";
import Footer from "./Footer";
import {shallow} from "enzyme";

describe('Footer test', () => {
    it('component render without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    }); 

    it('verify the render compn=onent', () => {
        const wrapper = shallow(<Footer />);
        const footerText = wrapper.text();
        expect(footerText).toContain('Copyright');
    });
});