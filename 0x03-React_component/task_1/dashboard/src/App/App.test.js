import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it('contain Notification compnent', () => {
    const component = shallow(<App />)
    expect(component.contains(<Notifications />)).toBe(true);
  });

  it('contain Notification compnent', () => {
    const component = shallow(<App />)
    expect(component.contains(<Header />)).toBe(true);
  });

  it('contain Notification compnent', () => {
    const component = shallow(<App />)
    expect(component.contains(<Login />)).toBe(true);
  });

  it('contain Notification compnent', () => {
    const component = shallow(<App />)
    expect(component.contains(<Footer />)).toBe(true);
  });

  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);
    component.setProps({ isLoggedIn: false });

  expect(component.contains(<CourseList />)).toBe(true);
  });
  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.contains(<CourseList />)).toBe(true);
    expect(component.contains(<Login />)).toBe(false);
  });
});

describe('App component', () => {
  it('"calls logOut function and shows alert', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<App isLoggedIn={true} logOut={logOutMock} />);
    wrapper.instance().handleKeyDown({ ctrlKey: true, key: "h" });
    expect(logOutMock).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
  });
});