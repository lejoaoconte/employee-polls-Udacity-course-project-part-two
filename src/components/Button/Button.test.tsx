import React from "react";

import { fireEvent, render } from "@testing-library/react";

import { Button } from ".";

describe("Button", () => {
  const textClick = () => {
    console.log("click");
  };

  const setup = () => {
    const component = render(
      <Button label="Test" onClick={() => textClick()} />
    );
    const button = component.getByTestId("button-test");
    return {
      button,
      ...component,
    };
  };

  it("Testing render on screen", () => {
    const { button }: any = setup();
    expect(button).toBeInTheDocument;
  });

  it("Test button click", () => {
    const { button }: any = setup();
    fireEvent.click(button);
  });
});