import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("test button component", () => {
  let buttonProps = {
    id: "test-button",
    label: "test button label",
    onClick: jest.fn(),
  };

  it("should match snapshot", () => {
    const wrapper = render(<Button {...buttonProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("rshould call onClick when clicked", () => {
    const onClickCallback = jest.fn();
    buttonProps.onClick = onClickCallback;
    const { getByTestId } = render(<Button {...buttonProps} />);
    const testButton = getByTestId("test-button");
    expect(testButton).toBeInTheDocument();
    testButton.click();
    expect(onClickCallback).toHaveBeenCalled();
  });
});
