import "react-native";
import React from "react";
import App from "../src/App";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

jest.useFakeTimers();

describe("Root component", () => {
  const tree = renderer.create(<App />);
  it("matches snapshot", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
