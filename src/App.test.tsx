import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Check UI elements", () => {
  it("should match snapshot", () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the blank grid", () => {
    const { getByTestId } = render(<App />);
    const grid = getByTestId("cell-simulator-grid");
    expect(grid).toBeInTheDocument();
  });
});
