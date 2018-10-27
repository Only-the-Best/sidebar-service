import { shallow, mount, render } from "enzyme";
import React from "react";

import App from "../App.jsx";

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("it should exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
