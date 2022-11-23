import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";

import { Input } from ".";

describe("Input", () => {
  const setup = () => {
    const component = render(<Input label="Test" />);
    const input = component.getByLabelText("Test");
    return {
      input,
      ...component,
    };
  };

  it("Testing render on screen", () => {
    const { input } = setup();
    expect(input).toBeInTheDocument;
  });

  it("Test alter text", () => {
    const { input } = setup();

    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "Testinput" } });
    expect(input.value).toBe("Testinput");
  });
});
