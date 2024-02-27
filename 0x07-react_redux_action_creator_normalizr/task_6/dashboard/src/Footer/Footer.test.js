import React from "react";
import Footer from "./Footer";
import {shallow} from "enzyme";
import { AppContext } from '../App/AppContext';

describe('Footer test', () => {
    it('component render without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    }); 

    it('verify the render compn=onent', () => {
        const wrapper = shallow(<Footer />);
        const footerText = wrapper.text();
        expect(footerText).toContain('Copyright');display
    });

    it('does not  the link when user is logged out', () => {
        const wrapper = shallow(
          <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
            <Footer />
          </AppContext.Provider>
        );
        expect(wrapper.find('a')).toHaveLength(0);
      });
    
      it('displays the link when user is logged in', () => {
        const wrapper = shallow(
          <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
            <Footer />
          </AppContext.Provider>
        );
        expect(wrapper.find('a')).toHaveLength(1);
      });
});