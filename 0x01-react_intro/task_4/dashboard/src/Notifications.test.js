import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('test nofication function', () => {
    it('Notifications renders without crashing', () => {
        const notification = shallow(<Notifications />)
        expect(notification).toBeDefined();
    });

    it("renders ul", () => {
        const notification = shallow(<Notifications />);
        expect(notification.find("ul")).toBeDefined();
      });

    it('Notifications renders three list items', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find("li")).toHaveLength(3);
    });

    it('Notifications renders the text', () => {
        const notification = shallow(<Notifications />)
        expect(notification.find('Here is the list of notifications')).toBeDefined
    });
});