/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from "@testing-library/react";

import Button from "../../src/components/button";

const testValue = "Test 123";

describe("When passed a children prop", () => {
  it("displays the correct value", () => {
    const { queryByRole } = render(<Button>{testValue}</Button>);

    const element = queryByRole("button");

    expect(element).toBeTruthy();
    expect(element.textContent).toMatch(testValue);
  });
});

describe("When passed an onClick prop and clicked", () => {
  it("triggers the onClick", () => {
    const onClickMock = jest.fn();
    const { queryByRole } = render(
      <Button onClick={onClickMock}>Click Me</Button>
    );
    const buttonElement = queryByRole("button");

    expect(buttonElement).toBeTruthy();

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
