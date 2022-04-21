import { shallow } from "enzyme";
import Index from "./index";
import React from "react";
import toJson from "enzyme-to-json";

describe("<Index />", () => {
  it("renders", () => {
    const text = "hello";
    const app = shallow(<Index text={text} />);
    expect(toJson(app)).toMatchSnapshot();
  });
});
