import React from "react";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import { shallow } from "enzyme";
import Notifications from "../Notifications/Notifications";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it('contain Notification compnent', () => {
    const component = shallow(<App />)
    // expect(component.exists()).toBe(true)
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
});