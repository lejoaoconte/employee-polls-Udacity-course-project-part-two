import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";

import { Switch } from ".";

describe("Switch", () => {
  const setup = () => {
    const component = render(<Switch label="Test" />);
    const switchComponent = component.getByTestId("switch-test");
    return {
      switchComponent,
      ...component,
    };
  };

  it("Testing render on screen", () => {
    const { switchComponent } = setup();
    expect(switchComponent).toBeInTheDocument;
  });

  it("Test clicked on switch", () => {
    const { switchComponent } = setup();

    expect(switchComponent.checked).toEqual(false);
    fireEvent.click(switchComponent);
    expect(switchComponent.checked).toEqual(true);
  });
});
