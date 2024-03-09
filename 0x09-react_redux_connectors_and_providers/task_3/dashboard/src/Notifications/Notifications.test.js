import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper).toBeDefined();
  });

  it("renders correct list items", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
    expect(wrapper.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(wrapper.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(wrapper.find("ul").childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });

  it("renders an unordered list", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it("renders correct text", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find("div.menuItem").exists()).toBe(true);
    expect(wrapper.find("div.menuItem").html()).toEqual('<div class="menuItem"><p>Your notifications</p></div>');
  });

  it("does not display notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });

  it("does not display menuItem when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("div.menuItem").exists()).toBe(true);
  });

  it("displays Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("div.Notifications").exists()).toBe(true);
  });

  it('renders with an empty array', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>)
    expect(wrapper).containsMatchingElement(<li>No new notification for now</li>)
  });

  it('renders with with no list property passed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper).containsMatchingElement(<li>No new notification for now</li>)
  });

  it('component renders it correctly and with the right number of NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications}/>)
    expect(wrapper).find(NotificationItem).toHaveLength(3)
  });

  it('verify notification messation', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>)
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);
    expect(wrapper).containsMatchingElement(<li>No new notification for now</li>).toBe(true);
  });

  it("doesnt re-render when the list passed as prop is the same", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

    expect(wrapper.instance().shouldComponentUpdate(listNotifications)).toBe(false);
  });

  it("re-renders if listNotifications if listNotifications is changed", () => {
    const newListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "default", html: getLatestNotification() },
      { id: 4, type: "default", value: "Foo" },
    ];

    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

    expect(wrapper.instance().shouldComponentUpdate(newListNotifications)).toBe(true);
  });
  
});

describe('App component', () => {
  it('mockup the console.log function', () => {
    const wrapper = shallow(<Notifications />);
    const spy = jest.spyOn(console, "log").mockImplementation();

    wrapper.instance().markAsRead = spy;
    wrapper.instance().markAsRead(1);
    expect(wrapper.instance().markAsRead).toBeCalledWith(1);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  });
  it('verify that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
    wrapper.find("div").at(0).simulate("click");

    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).not.toHaveBeenCalled();

  jest.restoreAllMocks();
  });
});


  
