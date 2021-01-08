import "react-native";
import React from "react";
import DashboardScreen from "../../src/screens/DashboardScreen";

import renderer from "react-test-renderer";

jest.useFakeTimers();

describe("Dashboard screen", () => {
  const tree = renderer.create(<DashboardScreen />);
  it("matches snapshot", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
