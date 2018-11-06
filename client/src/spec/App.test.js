import { shallow, mount, render } from "enzyme";
import React from "react";
import sinon from 'sinon';
import App from "../App.js";
import TopBar from "../components/form.js";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const Enzyme = require('enzyme');

configure({adapter: new Adapter()});

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    console.log('this is a test', wrapper.debug());
  });

  test("it should exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should have the right components', () => {
    
  })

});
