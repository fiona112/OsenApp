import "react-native";
import React from "react";
import LoginScreen from "../../src/screens/LoginScreen";

import renderer from "react-test-renderer";

jest.useFakeTimers();

describe("Login screen", () => {
  const tree = renderer.create(<LoginScreen />);
  it("matches snapshot", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
