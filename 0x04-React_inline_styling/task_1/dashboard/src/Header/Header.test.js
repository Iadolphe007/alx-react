import React from "react";
import Header from "./Header";
import {shallow} from "enzyme";

describe('Test Header component', () => {
    it('renders Header without crashing', () => {
        const wrapper = shallow(<Header />);
        // expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toEqual(true);
    });

    it('render component of img snd h1', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).find('img').toHaveLength(1);
        expect(wrapper).find('h1').toHaveLength(1);
    });
});